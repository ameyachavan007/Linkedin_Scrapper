console.log("running in background...");


chrome.runtime.onMessage.addListener(reciever);
const allData = [];



// window.word = "dummy_name";

const objectToCsv = (data) => {
    const csvRows = [];
    //getting headers
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));
    //looping through rows
    for( const row of data) {
        const values = headers.map(header => {
            const escaped = (''+row[header]).replace(/"/g, '\\"');
            return `"${(escaped)}"`;
        });
        csvRows.push(values.join(','));
    }
    // form escaped comma separated values
    return csvRows.join('\n');
};

const download = (data) => {
    const blob = new Blob([data], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden','');
    a.setAttribute('href', url);
    a.setAttribute('download', 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

function reciever(request, sender, sendResponse) {
    const text = JSON.stringify(request);
    const json = JSON.parse(text);
    if(allData.indexOf(json) === -1) {
        allData.push(json);
    const csvData = objectToCsv(allData);
    download(csvData); //remove this
    //TODO: sendToAirtable(csvData);   
        }
  }