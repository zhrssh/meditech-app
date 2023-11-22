from flask import Blueprint
from flask import request
from src.controller.prescriptionController import (
    add_prescription,
    get_prescriptions,
    delete_prescription,
)
from src.middleware.jwt import token_required

prescriptions_bp = Blueprint("prescriptions", __name__)


@prescriptions_bp.route("/", methods=["GET", "POST"])
@token_required("prescriptions")
def index(user):
    if not user:
        return "'user' is not found.", 404
    elif not user[0]:
        return "'uuid' of user is not found.", 404

    if request.method == "GET":
        prescriptions = get_prescriptions(uuid=user[0])
        if not prescriptions:
            return "No prescriptions found.", 404

        return {"prescriptions": prescriptions}, 200
    elif request.method == "POST":
        # Get all prescriptions
        json_data = request.get_json()

        # Add uuid to the json_data
        json_data["uuid"] = user[0]

        # Add prescription to the database
        add_prescription(json_data)

        return "Added prescription to the database.", 200
    else:
        return 404


@prescriptions_bp.route("/delete", methods=["POST"])
@token_required("delete_prescriptions")
def delete(user):
    if not user:
        return "'user' is not found.", 404
    elif not user[0]:
        return "'uuid' of user is not found.", 404

    if request.method == "POST":
        prescription_id = request.get_json()["prescription_id"]
        if not prescription_id:
            return "'prescription_id' is missing.", 404

        # Deletes the prescription selected
        delete_prescription(user[0], prescription_id)

        return f"Prescription ID {prescription_id} deleted.", 200

    else:
        return 404