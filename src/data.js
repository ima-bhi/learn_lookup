// Import Mongoose models
const User = require("./models/User");
const Post = require("./models/Post");
const Comment = require("./models/Comment");
const Like = require("./models/Like");
const Tag = require("./models/Tag");
const PostTag = require("./models/PostTags");
const View = require("./models/View");
const Follower = require("./models/Followers");
// Connect to the DB and then insert users
const insertD = async () => {
  // Insert sample users
  const users = await User.insertMany([
    {
      username: "User 1",
      email: "user1@example.com",
      age: 19,
      createdAt: new Date(),
    },
    {
      username: "User 2",
      email: "user2@example.com",
      age: 22,
      createdAt: new Date(),
    },
    {
      username: "User 3",
      email: "user3@example.com",
      age: 26,
      createdAt: new Date(),
    },
    {
      username: "User 4",
      email: "user4@example.com",
      age: 34,
      createdAt: new Date(),
    },
    {
      username: "User 5",
      email: "user5@example.com",
      age: 35,
      createdAt: new Date(),
    },
    {
      username: "User 6",
      email: "user6@example.com",
      age: 45,
      createdAt: new Date(),
    },
    {
      username: "User 7",
      email: "user7@example.com",
      age: 29,
      createdAt: new Date(),
    },
    {
      username: "User 8",
      email: "user8@example.com",
      age: 21,
      createdAt: new Date(),
    },
    {
      username: "User 9",
      email: "user9@example.com",
      age: 50,
      createdAt: new Date(),
    },
    {
      username: "User 10",
      email: "user10@example.com",
      age: 44,
      createdAt: new Date(),
    },
    {
      username: "User 11",
      email: "user11@example.com",
      age: 23,
      createdAt: new Date(),
    },
    {
      username: "User 12",
      email: "user12@example.com",
      age: 33,
      createdAt: new Date(),
    },
    {
      username: "User 13",
      email: "user13@example.com",
      age: 27,
      createdAt: new Date(),
    },
    {
      username: "User 14",
      email: "user14@example.com",
      age: 31,
      createdAt: new Date(),
    },
    {
      username: "User 15",
      email: "user15@example.com",
      age: 46,
      createdAt: new Date(),
    },
    {
      username: "User 16",
      email: "user16@example.com",
      age: 51,
      createdAt: new Date(),
    },
    {
      username: "User 17",
      email: "user17@example.com",
      age: 40,
      createdAt: new Date(),
    },
    {
      username: "User 18",
      email: "user18@example.com",
      age: 18,
      createdAt: new Date(),
    },
    {
      username: "User 19",
      email: "user19@example.com",
      age: 37,
      createdAt: new Date(),
    },
    {
      username: "User 20",
      email: "user20@example.com",
      age: 48,
      createdAt: new Date(),
    },
    {
      username: "User 21",
      email: "user21@example.com",
      age: 32,
      createdAt: new Date(),
    },
    {
      username: "User 22",
      email: "user22@example.com",
      age: 25,
      createdAt: new Date(),
    },
    {
      username: "User 23",
      email: "user23@example.com",
      age: 36,
      createdAt: new Date(),
    },
    {
      username: "User 24",
      email: "user24@example.com",
      age: 41,
      createdAt: new Date(),
    },
    {
      username: "User 25",
      email: "user25@example.com",
      age: 49,
      createdAt: new Date(),
    },
    {
      username: "User 26",
      email: "user26@example.com",
      age: 20,
      createdAt: new Date(),
    },
    {
      username: "User 27",
      email: "user27@example.com",
      age: 30,
      createdAt: new Date(),
    },
    {
      username: "User 28",
      email: "user28@example.com",
      age: 42,
      createdAt: new Date(),
    },
    {
      username: "User 29",
      email: "user29@example.com",
      age: 47,
      createdAt: new Date(),
    },
    {
      username: "User 30",
      email: "user30@example.com",
      age: 28,
      createdAt: new Date(),
    },
    {
      username: "User 31",
      email: "user31@example.com",
      age: 19,
      createdAt: new Date(),
    },
    {
      username: "User 32",
      email: "user32@example.com",
      age: 35,
      createdAt: new Date(),
    },
    {
      username: "User 33",
      email: "user33@example.com",
      age: 38,
      createdAt: new Date(),
    },
    {
      username: "User 34",
      email: "user34@example.com",
      age: 43,
      createdAt: new Date(),
    },
    {
      username: "User 35",
      email: "user35@example.com",
      age: 50,
      createdAt: new Date(),
    },
    {
      username: "User 36",
      email: "user36@example.com",
      age: 33,
      createdAt: new Date(),
    },
    {
      username: "User 37",
      email: "user37@example.com",
      age: 26,
      createdAt: new Date(),
    },
    {
      username: "User 38",
      email: "user38@example.com",
      age: 24,
      createdAt: new Date(),
    },
    {
      username: "User 39",
      email: "user39@example.com",
      age: 31,
      createdAt: new Date(),
    },
    {
      username: "User 40",
      email: "user40@example.com",
      age: 22,
      createdAt: new Date(),
    },
    {
      username: "User 41",
      email: "user41@example.com",
      age: 27,
      createdAt: new Date(),
    },
    {
      username: "User 42",
      email: "user42@example.com",
      age: 52,
      createdAt: new Date(),
    },
    {
      username: "User 43",
      email: "user43@example.com",
      age: 23,
      createdAt: new Date(),
    },
    {
      username: "User 44",
      email: "user44@example.com",
      age: 36,
      createdAt: new Date(),
    },
    {
      username: "User 45",
      email: "user45@example.com",
      age: 25,
      createdAt: new Date(),
    },
    {
      username: "User 46",
      email: "user46@example.com",
      age: 21,
      createdAt: new Date(),
    },
    {
      username: "User 47",
      email: "user47@example.com",
      age: 39,
      createdAt: new Date(),
    },
    {
      username: "User 48",
      email: "user48@example.com",
      age: 53,
      createdAt: new Date(),
    },
    {
      username: "User 49",
      email: "user49@example.com",
      age: 37,
      createdAt: new Date(),
    },
    {
      username: "User 50",
      email: "user50@example.com",
      age: 45,
      createdAt: new Date(),
    },
  ]);

  // Tags
  const tags = await Tag.insertMany([
    { name: "Adventure" },
    { name: "Travel" },
    { name: "Food" },
    { name: "Lifestyle" },
    { name: "Health" },
    { name: "Technology" },
    { name: "Fitness" },
    { name: "Education" },
    { name: "Photography" },
    { name: "Nature" },
  ]);

  const randomContent = [
    "This is a great day for a new adventure!",
    "Exploring new horizons and discovering hidden gems.",
    "Sharing my favorite recipes for a healthy lifestyle.",
    "Technology is evolving at an incredible pace.",
    "Fitness is not just about the body; it's about the mind too.",
    "Capturing moments through the lens of my camera.",
    "Nature has a way of inspiring creativity.",
    "Education is the key to unlocking potential.",
    "Travel opens up a world of experiences.",
    "Every meal is a chance to savor life.",
  ];

  const randomComments = [
    "Great post!",
    "Thanks for sharing!",
    "Really informative!",
    "I enjoyed reading this.",
    "Very insightful!",
    "I completely agree!",
    "This was helpful, thank you!",
    "I have a different perspective.",
    "Interesting take on the topic!",
    "Can't wait to read more!",
  ];

  //Adding Followers entry
  const followersData = generateFollowers(users);
  await Follower.insertMany(followersData);

  // Consist view,posts,comments,etc.
  users.map(async (user) => {
    const postsData = [];

    for (let i = 1; i <= 10; i++) {
      const numberOfContents = Math.floor(Math.random() * 5) + 1; // Random number from 1 to 5
      const contentArray = [];

      for (let j = 0; j < numberOfContents; j++) {
        contentArray.push(
          randomContent[Math.floor(Math.random() * randomContent.length)]
        );
      }

      postsData.push({
        title: `Post ${i}`,
        content: contentArray.join(" "), // Join content with a space
        authorId: user._id,
        createdAt: new Date(),
      });
    }
    const posts = await Post.insertMany(postsData);

    // View
    const viewData = [];

    for (const post of posts) {
      // Generate a random number of views (e.g., between 1 and 5)
      const numberOfViews = Math.floor(Math.random() * 5) + 1;

      // Get unique users to ensure no duplicate views from the same user
      const uniqueViewers = new Set();

      while (uniqueViewers.size < numberOfViews) {
        const randomUserIndex = Math.floor(Math.random() * users.length);
        const viewer = users[randomUserIndex];

        // Avoid adding the same user multiple times for the same post
        uniqueViewers.add(viewer._id);
      }

      // Create view entries
      uniqueViewers.forEach((viewerId) => {
        viewData.push({
          postId: post._id,
          userId: viewerId,
          createdAt: new Date(),
        });
      });
    }

    // Insert view data into the database
    await View.insertMany(viewData);

    //comemnts
    const commentData = [];

    await Promise.all(
      posts.map(async (post) => {
        const numberOfComments = Math.floor(Math.random() * 5) + 1; // Random number from 1 to 5

        for (let j = 0; j < numberOfComments; j++) {
          commentData.push({
            text: randomComments[
              Math.floor(Math.random() * randomComments.length)
            ],
            postId: post._id,
            userId: user._id,
            createdAt: new Date(),
          });
        }
      })
    );

    await Comment.insertMany(commentData);

    //like
    const likeData = [];
    posts.map(async (post) => {
      likeData.push({
        postId: post._id,
        userId: user._id,
        createdAt: new Date(),
      });
    });
    await Like.insertMany(likeData);

    //postTags
    const postTagData = [];

    await Promise.all(
      posts.map(async (post) => {
        const numberOfTags = Math.floor(Math.random() * tags.length) + 1; // Random number of tags (1 to total number of tags)
        const selectedTags = [];

        // Randomly select unique tags
        while (selectedTags.length < numberOfTags) {
          const randomIndex = Math.floor(Math.random() * tags.length);
          const tag = tags[randomIndex];

          // Check for uniqueness
          if (!selectedTags.includes(tag._id)) {
            selectedTags.push(tag._id);
          }
        }

        // Create post-tag associations
        selectedTags.forEach((tagId) => {
          postTagData.push({
            postId: post._id,
            tagId: tagId,
            createdAt: new Date(),
          });
        });
      })
    );

    await PostTag.insertMany(postTagData);
  });
};

// Helper function to generate random followers
function generateFollowers(users) {
  const followers = [];

  users.forEach((user) => {
    // Random number of followers between 1 and 5
    const numFollowers = Math.floor(Math.random() * 5) + 1;
    const followees = new Set(); // Ensure unique followees

    while (followees.size < numFollowers) {
      const randomFolloweeIndex = Math.floor(Math.random() * users.length);
      const randomFollowee = users[randomFolloweeIndex];

      // Avoid self-following
      if (randomFollowee._id.toString() !== user._id.toString()) {
        followees.add(randomFollowee._id);
      }
    }

    // Add followers to the array
    followees.forEach((followeeId) => {
      followers.push({
        followerId: user._id,
        followeeId: followeeId,
        createdAt: new Date(),
      });
    });
  });

  return followers;
}

module.exports = insertD; 