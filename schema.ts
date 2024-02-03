interface post {
    id: string,
    user_id: string,
    caption: string,
    media_url: string,
    timestamp: string,
    skills: Array<skill>,
};

interface likes {
    user_id: string,
    post_id: string,
}

interface skill {
    id: string,
    name: string,
}

interface comments {
    user_id: string,
    post_id: string,
    content: string,
    timestamp: string,
}

interface profile {
    user_id: string,
    fname: string,
    lname: string,
    email: string,
    username: string,
    dp: string,
    cover_pic: string,
    bio: string,
    skills: Array<skill>,
}

interface follow {
    user_id: string,
    following: string,
}


interface message {
    sender: string,
    receiver: string,
    text: string,
    media_url: string,
    timestamp: string,
}