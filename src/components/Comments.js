import CommentsList from "./CommentsList";

const Comments = () => {
    const commentsData = [
        {
          name: "User1",
          comment: "Comment level 1",
          replies: [
            {
              name: "User2",
              comment: "Comment level 2",
              replies: [
                {
                  name: "User3",
                  comment: "Comment level 3",
                  replies: [
                    {
                      name: "User4",
                      comment: "Comment level 4",
                      replies: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "User5",
              comment: "Another Comment level 2",
              replies: [],
            },
          ],
        },
        {
          name: "User6",
          comment: "Another Comment level 1",
          replies: [
            {
              name: "User7",
              comment: "Comment within Comment",
              replies: [],
            },
            {
              name: "User8",
              comment: "Another Comment within Comment",
              replies: [],
            },
          ],
        },
      ];
      
    return(
        <div>
            <CommentsList data = {commentsData}/>
        </div>
    )
}

export default Comments;