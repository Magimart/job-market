
/** funtion before refactoring
this.initialInterval =   setInterval(()=> {
    const isHeadlines = ["built for proffenssionals", "you can fly", "divesity is here", "show what you gat", "never surrender"]
        const isCurrentIndex = isHeadlines.indexOf(this.welcomeText)
        const moveToNextIndex = (isCurrentIndex + 1) % 4
        const isNextHeadline = isHeadlines[moveToNextIndex]
        console.log("inside setinterval",isNextHeadline)
            //return isNextHeadline
            this.welcomeText = isNextHeadline
    
    this.welcomeText = NextHeadLine(isHeadlines, this.welcomeText);
}, 4000 );
*/
 export const NextHeadLine = (isHeadlines, value ) =>{

    // isHeadlines = ["built for proffenssionals", "you can fly", "divesity is here", "show what you gat", "never surrender"]
    const isCurrentIndex = isHeadlines.indexOf(value);
    const moveToNextIndex = (isCurrentIndex + 1) % isHeadlines.length;
    const isNextHeadline = isHeadlines[moveToNextIndex];
    console.log("inside setinterval",isNextHeadline)
    return isNextHeadline

}










