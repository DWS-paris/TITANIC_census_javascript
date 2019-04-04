/* 
Wait for DOM content
*/
    document.addEventListener('DOMContentLoaded', () => {        
        /* 
        Declaration
        Use this section to declare you variables
        */
            // This const is used for debugging
            const debug = false;
        //



        /* 
        Methods
        */
            // 
            const collectionLoop = (titanicData = titanicJSdata) => {
                /* 
                Loop on "titanicData" parameter to get each passenger independently

                Step #1) Passenger counting
                    - TODO: amount of women
                    - TODO: age average of women
                    - TODO: amount of men
                    - TODO: age average of men
                    - TIPS: You need to change String value in Number or Float value

                Step #2) Survivors
                    - TODO: amount of women who survived
                    - TODO: amount of men who survived
                    - TODO: amount of dead passengers
                    - TODO: amount of survived passengers
                    - TIPS: If you have the amount of survivors you also hame the amount of dead passengers

                Step #3) Younger / Older
                    - TODO: younger passenger who survived
                    - TODO: older passenger who survived
                    - TODO: younger passenger who died
                    - TODO: older passenger who died
                    - TIPS: Ternary conditions are usefull ( condition ? true : false )
                */
                    

                    /* 
                    Display result
                    If "debug" value is "true" display result in the console (cf. index.html).
                    */
                        if(debug) console.log('%cTotal analyzable passengers', 'color: green', undefined);
                        if(debug) console.log('%cReparrtition', 'color: blue', undefined);
                        if(debug) console.log('%cAge average', 'color: blue', undefined);
                        if(debug) console.log('%cPassengers', 'color: blue', undefined);
                        if(debug) console.log('%cAmont of survivors', 'color: green', undefined );
                        if(debug) console.log('%cSurvivors repartition', 'color: blue', undefined);
                        if(debug) console.log('%cOlder survivor', 'color: green', undefined );
                        if(debug) console.log('%cYounger survivor', 'color: green', undefined );
                        if(debug) console.log('%cAmount of death', 'color: red', undefined );
                        if(debug) console.log('%cDead repartition', 'color: blue', undefined);
                        if(debug) console.log('%cOlder dead', 'color: red', undefined );
                        if(debug) console.log('%cYounger dead', 'color: red', undefined );
                    //
                //
            }
        //


        /* 
        Start interface
        */
            // Call the function to start iteration
            collectionLoop();
        //
    })
//