export function calculateExercises(dailyHours: number[], target: number)
{
    const trainingDays = dailyHours.filter((day => day > 0)).length;

    const periodLength = dailyHours.length;
    let rating: number = 0;
    let ratingDescription: string = "";
    
    
    let totalHours:number = 0;
    for (const day of dailyHours){
        totalHours += day
    }
    
    const average = totalHours / periodLength;
    
    if(average >= target) {
        rating = 3;
        ratingDescription = "Excelente, buen trabajo💪🏻";    
    }else if(average >= target * 0.7) {
        rating = 2;
        ratingDescription = "Vas bien, pero aun puedes hacerlo mejor vamos!";
    }
    else{
        rating = 1;
        ratingDescription = "Esfuerzate mas tu puedes :)";
    }

    const success = rating >= 3 ? ' true' : ' false';

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average,
    }
}