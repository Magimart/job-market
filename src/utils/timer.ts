

// export const NextHeadLine = (isHeadlines: string[], value: string ): string =>{
    export const NextHeadLine = <T>(isHeadlines: T[], value: T ) =>{
    const isCurrentIndex = isHeadlines.indexOf(value);
    const moveToNextIndex = (isCurrentIndex + 1) % isHeadlines.length;
    const isNextHeadline = isHeadlines[moveToNextIndex];
    // console.log("inside setinterval",isNextHeadline)
    return isNextHeadline

}










