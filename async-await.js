async function testing()
{
    console.log("Testing ..... async");

         await setTimeout(() => {
            console.log("Delayed for 1 second.");
        }, "1000");


}


console.log("Hello I am running");

testing();