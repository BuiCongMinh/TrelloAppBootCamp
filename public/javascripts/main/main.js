todolist()

async function todolist() {
    try {
        // console.log(22, arDoing, arDone,arTodo);

        const res = await $.ajax({
            type: 'GET',
            url: 'api/task'
        })

        $('.column').html('')

        const arTodo = res.filter(item => { return item.status === 'todo' })
        const arDoing = res.filter(item => { return item.status === 'doing' })
        const arDone = res.filter(item => { return item.status === 'done' })
        console.log(12, arTodo, arDoing, arDone);

        arTodo.map(val => {
            return $('#todo').append(`
                <div class="portlet" id='${val._id}'>
                    <div class="portlet-header">${val.title}</div>
                    <div class="portlet-content">${val.des}</div>
                    <div class="portlet-content">${val.status}</div>
                </div>
            `)
        })

        arDoing.map(val => {
            return $('#doing').append(`
                <div class="portlet" id='${val._id}'>
                    <div class="portlet-header">${val.title}</div>
                    <div class="portlet-content">${val.des}</div>
                    <div class="portlet-content">${val.status}</div>
                </div>
            `)
        })

        arDone.map(val => {
            return $('#done').append(`
                <div class="portlet" id='${val._id}'>
                    <div class="portlet-header">${val.title}</div>
                    <div class="portlet-content">${val.des}</div>
                    <div class="portlet-content">${val.status}</div>
                </div>
            `)
        })

        prety()
        dropData()


    } catch (error) {
        console.log(error);
    }
}

function dropData() {
    $('.column').droppable({
        drop: function (event, ui) {

            let idTask = ui.draggable.attr('id')
            // console.log(63, ui.draggable.attr('id'));
            let newStatus = $(this).attr('id');
            // console.log(64, newStatus);
            $.ajax({
                url: '/api/task/updeate/' + idTask,
                type: "patch",
                data: {
                    status: newStatus,
                }
            })
                .then(data => {
                    alert('thành công')
                    todolist()
                })
        }
    });
}

function prety() {
    $(".column").sortable({
        connectWith: ".column",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all"
    });

    $(".portlet")
        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".portlet-header")
        .addClass("ui-widget-header ui-corner-all")
        .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

    $(".portlet-toggle").on("click", function () {
        var icon = $(this);
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        icon.closest(".portlet").find(".portlet-content").toggle();
    });
};
