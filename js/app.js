/* 
Wait for DOM content
*/
    document.addEventListener('DOMContentLoaded', () => {        
        /* 
        Declaration
        The several declarations below are used in the program,
        it's recommanded to not change their name.
        */
            // The collection you had to analyse is 'passengersCollection';
            const passengersCollection = titanicJSdata;
            let totalAnalyzablePassengers = 0;
            let amountOfWomen = 0; // Use this let to calculate the number of women
            let ageAverageWomen = 0; // Use this let to calculate the women age average
            let survivorsWomen = 0; // Use this let to calculate the amount of survived women

            let amountOfMen = 0; // Use this let to calculate the number of men
            let ageAverageMen = 0; // Use this let to calculate the men age average
            let survivorsMen = 0; // Use this let to calculate the amount of survived women

            let deadPassengers = 0; // Use this let to calculate the amount dead passengers
            let survivedPassengers = 0; // Use this let to calculate the amount survived passengers

            let youngerSurvivor = null; // Use this let to get younger survivor
            let youngerSurvivorAge = 0;
            let olderSurvivor = null; // Use this let to get older survivor
            let olderSurvivorAge = 0;
            let youngerDead = null; // Use this let to get younger dead
            let youngerDeadAge = 0; 
            let olderDead = null; // Use this let to get older dead
            let olderDeadAge = 0; 

            yougers = []
        //



        /* 
        Methods
        */
            // 
            const collectionLoop = titanicData => {
                /* 
                Loop on "titanicData" parameter to get each passenger independently
                */
                    for( let passenger of titanicData ){
                        /* 
                        Some passengers didn't have age value
                        */
                            if (+passenger.Age > 0) totalAnalyzablePassengers++;
                        //
                        /* 
                        Step #1) Passenger counting
                        - amount of women (amountOfWomen)
                        - age average of women (ageAverageWomen)
                        - amount of men (amountOfMen)
                        - age average of men (ageAverageMen)

                        TIPS: you need to change String value in Number or Float value (https://mzl.la/1Ize5HY | https://mzl.la/1eU7sqI )
                        */
                            if(passenger.Sex === 'female'){
                                // Define quantity of women
                                amountOfWomen++;

                                // Add up women ages 
                                ageAverageWomen += +passenger.Age;
                            }
                            else if(passenger.Sex === 'male'){
                                // Define quantity of men
                                amountOfMen++;
                                // Add up men ages 
                                ageAverageMen += +passenger.Age;
                            };
                        //

                        /* 
                        Step #2) Survivors
                        - amount of woman who survived (survivorsWomen)
                        - amount of woman who survived (survivorsMen)
                        - amount of dead passengers (deadPassengers)
                        - amount of survived passengers (survivedPassengers)

                        TIPS: if you have the amount of survivors you also hame the amount of dead passengers
                        */
                            if( +passenger.Age > 0 && passenger.Sex === 'female' && passenger.Survived === "1"){
                                // Define quantity of survived women
                                survivorsWomen++;
                            }
                            else if ( +passenger.Age > 0 && passenger.Sex === 'male' && passenger.Survived === "1"){
                                // Define quantity of survived men
                                survivorsMen++;
                            };

                            +passenger.Age > 0 && passenger.Survived === "1" ? survivedPassengers++ : deadPassengers++;
                        //

                        /* 
                        Step #3) Younger / Older
                        - younger passenger who survived
                        - older passenger who survived
                        - younger passenger who died
                        - older passenger who died
                        */
                            // Define younger passengers in the first loop
                            if(youngerSurvivor === null){
                                youngerSurvivor = passenger;
                                youngerSurvivorAge = +passenger.Age;
                            }
                            else if(youngerDead === null){
                                youngerDead = passenger;
                                youngerDeadAge = +passenger.Age;
                            };

                            // Define ages of older passengers
                            if( +passenger.Age > 0 && +passenger.Age > olderSurvivorAge && passenger.Survived === "1" ) {
                                olderSurvivorAge = +passenger.Age;
                                olderSurvivor = passenger;
                            }
                            else if( +passenger.Age > 0 && +passenger.Age > olderDeadAge && passenger.Survived === "0" ) {
                                olderDeadAge = +passenger.Age;
                                olderDead = passenger;
                            };

                            // Define ages of younger passengers
                            if( +passenger.Age > 0 && +passenger.Age < youngerSurvivorAge && passenger.Survived === "1" ) {
                                youngerSurvivorAge = +passenger.Age;
                                youngerSurvivor = passenger;
                            }
                            else if( +passenger.Age > 0 && +passenger.Age < youngerDeadAge && passenger.Survived === "0" ) {
                                youngerDeadAge = +passenger.Age;
                                youngerDead = passenger;
                            };
                        //
                    };

                    /* 
                    Define age averages
                    */
                        ageAverageWomen = +((ageAverageWomen / amountOfWomen).toFixed(2));
                        ageAverageMen = +((ageAverageMen / amountOfMen).toFixed(2));
                    //

                    /* 
                    Display result
                    */
                        if(debug) console.log('%cTotal analyzable passengers', 'color: green', totalAnalyzablePassengers);
                        if(debug) console.log('%cReparrtition', 'color: blue', { amountOfWomen, amountOfMen });
                        if(debug) console.log('%cAge average', 'color: blue', { ageAverageWomen, ageAverageMen });
                        if(debug) console.log('%cPassengers', 'color: blue', { survivedPassengers, deadPassengers });
                        if(debug) console.log('%cAmont of survivors', 'color: green', survivorsWomen + survivorsMen );
                        if(debug) console.log('%cSurvivors repartition', 'color: blue', { survivorsWomen, survivorsMen });
                        if(debug) console.log('%cOlder survivor', 'color: green', olderSurvivor );
                        if(debug) console.log('%cYounger survivor', 'color: green', youngerSurvivor );
                        if(debug) console.log('%cAmount of death', 'color: red', totalAnalyzablePassengers - survivorsWomen - survivorsMen );
                        if(debug) console.log('%cDead repartition', 'color: blue', { women: amountOfWomen - survivorsWomen, men: amountOfMen - survivorsMen });
                        if(debug) console.log('%cOlder dead', 'color: red', olderDead );
                        if(debug) console.log('%cYounger dead', 'color: red', {youngerDead} );


                        

                    //
                //
            }
        //


        /* 
        Start interface
        */
            // Call the function to parse CSV to JSON
            collectionLoop(passengersCollection)
        //
    })
//