const ctx = document.getElementById('myChart')

      // new Chart(ctx, {
      //   type: 'bar',
      //   data:{
      //     labels : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      //     datasets:[{
      //       label: '# of votes',
      //       data: [12,12,3,5,2,3],
      //       borderWidth: 1
      //     }]
      //   },
      //   options : {
      //     scales: {
      //       y : {
      //         beginAtZero: true
      //       }
      //     }
      //   }
      // });

new Chart(ctx, {
        type: 'doughnut',
        data:{
          labels : ['Eating Out', 'Entertainment', 'General'],
          datasets:[{
            label: 'Amount Spent',
            data: [100,200,300],
            borderWidth: 1
          }]
        },
        options : {
          scales: {
            y : {
              beginAtZero: true
            }
          }
        }
      });

  