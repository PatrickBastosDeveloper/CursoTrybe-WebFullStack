const setTimeoutPromise = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            console.log('O tempo passou.')
            resolve();
          }, 3000);
    });
}

async function main() {
    console.log('Início da função main');

    await setTimeoutPromise();

    console.log('Fim da função main');
}

main();