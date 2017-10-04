
// Library for managing MIX interactions with IPFS
const IPFS = require('ipfs'),
    series = require('async').series;

export default class MixIpfs{

    constructor(options = null){

        this.ipfsNode = new IPFS();

        let fileMultihash = null;

        series(
            [
                (cb) => this.ipfsNode.on('ready', cb),
                (cb) => this.ipfsNode.version((err, version) => {
                    if (err) {
                        return cb(err)
                    }
                    console.log('Version:', version.version);
                    cb()
                })
            ]
        );

    }

    getNode(){

        if(!this.ipfsNode) throw new Error('Node does not exist');

        return this.ipfsNode;

    }

    addContent(){

        const content =  {
            path: 'hello.txt',
            content: Buffer.from('Elloo der')
        };

        return new Promise(
            (resolve, reject)=>{

                this.ipfsNode.files.add(content, (err, result) => {

                    if (err) { return reject(err); }

                    let fileMultiHash = null;

                    console.log('\nAdded file:', result[0].path, result[0].hash);

                    fileMultihash = result[0].hash;

                    resolve(fileMultiHash);
                })

            }
        )

    }

}

