const timeDoms = document.querySelectorAll('[data-time]');
const wrap = document.querySelector('.wrap')

const timeList = [...timeDoms];
// 取得 dataset 時間
const times = timeList.map((timeDom) => timeDom.dataset.time)
.map(timeCode => {
    const [min, sec] = timeCode.split(':').map(parseFloat);
    return (min*60) + sec
})
const totalTime = times.reduce((pre, acc) => pre + acc)
const hours = Math.floor(totalTime / 3600);
const secondsLeft = Math.floor(totalTime % 3600);
const mins = Math.floor(secondsLeft % 60);
const seconds = Math.floor(mins % 60)
const timeStr = document.createElement('p')
timeStr.textContent = `${hours}:${mins}:${seconds}`
wrap.appendChild(timeStr)