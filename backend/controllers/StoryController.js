import Story from "../models/StoryModel.js";
import Chapter from "../models/ChapterModel.js";

export const getStories = async(req, res) =>{
    try{
        const response = await Story.findAll();
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const getStoriesById = async (req, res) => {
    try {
        const response = await Story.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createStories = async (req, res) => {
    try {
        const newStory = await Story.create(req.body);

        await Chapter.update(
            {idStories: newStory.id},
            { where: { idStories: null}}
        );
        res.status(201).json({msg: "Story Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateStories = async (req, res) => {
    try {
        await Story.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Story Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteStories = async (req, res) => {
    try {
        await Story.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Story Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}