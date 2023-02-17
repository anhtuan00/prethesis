import { Schema } from "mongoose"

export const BaseModel = (model) => {
    return {
        _id: { type: String },

        Description: { type: String, maxLength: 500, },
        CreatedDate: { type: Date },
        CreatedBy: { type: Schema.Types.ObjectId, ref: 'user' },
    }
}