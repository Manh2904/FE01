import Joi from "joi";

export const validatePro = Joi.object({
    name: Joi.string().required().empty().messages({
        "any.required": "Tên sản phẩm không được để chống",
        "string.empty": "Tên sản phẩm không được để chống"
    }),
    price: Joi.number().required().min(100).messages({
        "any.required": "giá không được để chống",
        "number.min": "giá không được nhỏ hơm 100"
    }),
    image: Joi.string().required().empty().messages({
        "any.required": "ảnh không được để chống",
        "string.empty": "ảnh không được để chống"
    })
    
})