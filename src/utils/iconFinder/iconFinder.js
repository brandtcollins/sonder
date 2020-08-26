
const iconFinder = (category) => {
    switch (category) {
        case "Fitness":
            return "heart"
        case "Work":
            return "briefcase"
        case "Coding":
        case "Code":
            return "code"
        case "Art":
        case "Design":
            return "paint-brush"
        case "Music":
            return "music"
        case "Home":
            return "home"
        case "Pets":
            return "paw"
        default:
            return "hashtag"
    }
}

export default iconFinder