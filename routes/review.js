const express =require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor}=require("../middleware.js");

const reviewController=require("../controllers/review.js");

//Post Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete Route for review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;
