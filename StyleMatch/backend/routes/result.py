from flask import Blueprint, jsonify

result_bp = Blueprint("result", __name__)

@result_bp.route("/result_images/<style>")
def get_result_images(style):
    base_path =  f"/backend-static/result/{style}"

    return jsonify({
        "hero": f"{base_path}/Hero.png",
        "detail": f"{base_path}/detail.png",
        "lookbook": [
            f"{base_path}/1.png",
            f"{base_path}/2.png",
            f"{base_path}/3.png"
        ]
    })
