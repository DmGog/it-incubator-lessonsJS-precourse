// создаем структуру плейлиста https://www.figma.com/file/1FmTJc1sn9lwzSZRdOewRd/Precourse-%2F-Sprint-%231-%2F-Week-%231?type=design&node-id=11-1371&mode=design&t=Z1LfiBQztfOXxqUl-0
// Данные для плейлиста :
const playList = {
    playListId: '1',
    playListInfo: {
        title:'Hip-Hop Hits',
        coverImgUrl:'./Title-List',
        totalInfo:{
            totalTrackCount: 4,
            totalTrackDurationInSec: 733
        }
    },
    tracks: [
        {
            trackId: '10',
            trackTitle: 'Rap God',
            artistName: 'Eminem',
            trackCoverImgUrl: './Eminem',
            trackFileUrl :'https://ds.cdn4.deliciouspeaches.com/get/cuts/53/45/5345f1c087ec56d686a21e7013474e74/47964975/Eminem_-_Rap_God_b128f0d364.mp3',
        },
        {
            trackId: '11',
            trackTitle:'In da Club',
            artistName: '50 cent',
            trackCoverImgUrl: './50Cent',
            trackFileUrl :'https://ds.cdn1.deliciouspeaches.com/get/cuts/1d/c9/1dc9bed60952bc86dc754ed6bca8f67d/47965582/50_Cent_-_In_Da_Club_b128f0d193.mp3',
        }
    ]
}