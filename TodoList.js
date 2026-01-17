const input_task = document.getElementById('input-row')
const list = document.querySelector('.list')

function addTask() {
    if (input_task.value === '') {
        alert("Write something")
    } else {
        const li = document.createElement('li')
        li.textContent = input_task.value

        li.onclick = function () {
            li.classList.toggle('checked')
        }

        const dlt_btn = document.createElement("img")
        dlt_btn.src = "x.png"
        dlt_btn.className = "delete-btn"

        dlt_btn.onclick = function (e) {
            e.stopPropagation()
            li.remove()
        }

        li.appendChild(dlt_btn)
        list.appendChild(li)

        input_task.value = ''
    }
}
