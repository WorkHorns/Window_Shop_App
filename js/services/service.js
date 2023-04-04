const postData = async (data) => {
    const res = await fetch('/ClassicJSserver.php' , {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'},
            body: data
    });

    return await res.json();
};

async function getResource() {
    let res = await fetch('/ClassicJS/server.php');

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
};

export {postData};
export {getResource};