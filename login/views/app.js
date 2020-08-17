$(document).ready(function() {
  // Global Settings
  let edit = false;

  // Testing Jquery
  console.log('jquery is working!');
  fetchTasks();
  $('#task-result').hide();


  $('#look').submit(e => {
    e.preventDefault();
    if($('#search').val()) {
      let search = $('#search').val();
      $.ajax({
        url: 'task-search.php',
        data: {search},
        type: 'POST',
        success: function (response) {
          if(response.length != 2){
            if(!response.error) {
              console.log(response);
              console.log(response.length);
              let tasks = JSON.parse(response);
              let template = '';
                tasks.forEach(task => {
                  template += `
                         <li><a href="#" class="task-item">${task.name}</a></li>
                        ` 
                });
              $('#task-result').show();
              $('#container').html(template);
            }
          }else{
            $('#task-result').show();
            $('#container').html("<li  style='color: red;'>That task name don't in our databases.Please try again</li>")
          }
        } 
      })
    }else{
      $('#task-result').show();
      $('#container').html("<li style='color: red;'>That task name don't in our databases.Please try again</li>")
    }
  });

  // search key type event
  $('#search').keypress(function(e) {
    var key = e.which;
    if(key == 13){
      if($('#search').val()) {
        let search = $('#search').val();
        $.ajax({
          url: 'task-search.php',
          data: {search},
          type: 'POST',
          success: function (response) {
            if(response.length != 2){
              if(!response.error) {
                console.log(response);
                console.log(response.length);
                let tasks = JSON.parse(response);
                let template = '';
                  tasks.forEach(task => {
                    template += `
                           <li><a href="#" class="task-item">${task.name}</a></li>
                          ` 
                  });
                $('#task-result').show();
                $('#container').html(template);
              }
            }else{
              $('#task-result').show();
              $('#container').html("<li  style='color: red;'>That task name don't in our databases.Please try again</li>")
            }
          } 
        })
      }else{
        $('#task-result').show();
        $('#container').html("<li  style='color: red;'>That task name don't in our databases.Please try again</li>")
      }
    }
  });

  $('#task-form').submit(e => {
    e.preventDefault();
    const postData = {
      name: $('#name').val(),
      description: $('#description').val(),
      id: $('#taskId').val()
    };
    const url = edit === false ? 'task-add.php' : 'task-edit.php';
    console.log(postData, url);
    edit = false;
    $.post(url, postData, (response) => {
      console.log(response);
      $('#task-form').trigger('reset');
      fetchTasks();
    });
  });

  // Fetching Tasks
  function fetchTasks() {
    $.ajax({
      url: 'tasks-list.php',
      type: 'GET',
      success: function(response) {
        const tasks = JSON.parse(response);
        let template = '';
        tasks.forEach(task => {
          template += `
                  <tr taskId="${task.id}">
                    <td>${task.id}</td>
                    <td>
                      <a href="#" class="task-item">
                        ${task.name} 
                      </a>
                    </td>
                    <td>${task.description}</td>
                    <td>
                      <button class="task-delete btn btn-danger">
                        Delete 
                      </button>
                    </td>
                  </tr>
                `
        });
        $('#tasks').html(template);
      }
    });
  }

  // Get a Single Task by Id 
  $(document).on('click', '.task-item', (e) => {
    const element = $(this)[0].activeElement.parentElement.parentElement;
    const id = $(element).attr('taskId');
    $.post('task-single.php', {id}, (response) => {
      const task = JSON.parse(response);
      $('#name').val(task.name);
      $('#description').val(task.description);
      $('#taskId').val(task.id);
      edit = true;
    });
    e.preventDefault();
  });

  // Delete a Single Task
  $(document).on('click', '.task-delete', (e) => {
    if(confirm('Are you sure you want to delete it?')) {
      const element = $(this)[0].activeElement.parentElement.parentElement;
      const id = $(element).attr('taskId');
      $.post('task-delete.php', {id}, (response) => {
        fetchTasks();
      });
    }
  });
});
