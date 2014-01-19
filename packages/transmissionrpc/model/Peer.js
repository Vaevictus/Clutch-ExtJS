/**
 * @class NITB.model.MD_Notification
 * @extend Ext.data.Model
 * Data Model which contains all the informations related
 * to a single Peer.
 *  address                 | string     | tr_peer_stat
 238                       | clientName              | string     | tr_peer_stat
 239                       | clientIsChoked          | boolean    | tr_peer_stat
 240                       | clientIsInterested      | boolean    | tr_peer_stat
 241                       | flagStr                 | string     | tr_peer_stat
 242                       | isDownloadingFrom       | boolean    | tr_peer_stat
 243                       | isEncrypted             | boolean    | tr_peer_stat
 244                       | isIncoming              | boolean    | tr_peer_stat
 245                       | isUploadingTo           | boolean    | tr_peer_stat
 246                       | isUTP                   | boolean    | tr_peer_stat
 247                       | peerIsChoked            | boolean    | tr_peer_stat
 248                       | peerIsInterested        | boolean    | tr_peer_stat
 249                       | port                    | number     | tr_peer_stat
 250                       | progress                | double     | tr_peer_stat
 251                       | rateToClient (B/s)      | number     | tr_peer_stat
 252                       | rateToPeer (B/s)        | number     | tr_peer_stat
 */
Ext.define('Transmission.model.Peer', {
    extend : 'Ext.data.Model',
    fields : [{
        name : 'id',
        mapping : 'address'
    }, {
        name : 'address',
        type : 'string'
    }, {
        name : 'clientName',
        type : 'string'
    }, {
        name : 'clientIsChoked',
        type : 'bool'
    }, {
        name : 'clientIsInterested',
        type : 'bool'
    }, {
        name : 'flagStr',
        type : 'string'
    }, {
        name : 'isDownloadingFrom',
        type : 'bool'
    }, {
        name : 'isEncrypted',
        type : 'bol'
    }, {
        name : 'isIncoming',
        type : 'bool'
    }, {
        name : 'isUploadingTo',
        type : 'bool'
    }, {
        name : 'isUTP',
        type : 'string'
    }, {
        name : 'peerIsChoked',
        type : 'bool'
    }, {
        name : 'peerIsInterested',
        type : 'bool'
    }, {
        name : 'port',
        type : 'number'
    }, {
        name : 'progress',
        type : 'number'
    }, {
        name : 'rateToClient',
        type : 'number'
    }, {
        name : 'rateToPeer',
        type : 'number'
    }]
});

