const connectDB = require("./database");
const insertD = require("./data");
// Import Mongoose models
const User = require("./models/User");
const lookup = async () => {
  await connectDB(); // Wait until the DB is connected
 // await insertD();
  const userStats = await User.aggregate([
    {
      $group: {
        _id: {
          $cond: [
            { $and: [{ $gte: ["$age", 18] }, { $lte: ["$age", 24] }] },
            "18-24",
            {
              $cond: [
                { $and: [{ $gte: ["$age", 25] }, { $lte: ["$age", 34] }] },
                "25-34",
                {
                  $cond: [
                    { $and: [{ $gte: ["$age", 35] }, { $lte: ["$age", 44] }] },
                    "35-44",
                    "45+",
                  ],
                },
              ],
            },
          ],
        },
        userId: { $push: "$_id" },
      },
    },
    {
      $lookup: {
        from: "posts", 
        localField: "userId",
        foreignField: "authorId",
        as: "posts",
      },
    },
    {
      $lookup: {
        from: "comments",
        localField: "userId",
        foreignField: "userId",
        as: "comments",
      },
    },
    {
      $lookup: {
        from: "likes", 
        localField: "userId",
        foreignField: "userId",
        as: "likes",
      },
    },
    {
      $lookup: {
        from: "views", 
        localField: "userId",
        foreignField: "userId",
        as: "views",
      },
    },
    {
      $project: {
        _id:0,
        ageRange: "$_id",
        totalPosts: { $size: "$posts" },
        totalComments: { $size: "$comments" },
        totalLikes: { $size: "$likes" },
        totalViews: { $size: "$views" },
      },
    },
  ]);
  
  console.log("userStats", userStats);
};

lookup();
