// 3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.
const students = [
      { id: 1, name: "Alice", course: "Maths" },
      { id: 2, name: "Bob", course: "Physics" },
      { id: 3, name: "Charlie", course: "Chemistry" },
      { id: 4, name: "David", course: "Biology" },
      { id: 5, name: "Eve", course: "Computer Science" },
    ];

    function renderTable() {
      const tbody = document.querySelector("#studentTable tbody");
      // Clear existing rows if any
      tbody.innerHTML = "";

      students.forEach((stu) => {
        const tr = document.createElement("tr");

    
        const tdId = document.createElement("td");
        tdId.textContent = stu.id;
        tr.appendChild(tdId);

        
        const tdName = document.createElement("td");
        tdName.textContent = stu.name;
        tr.appendChild(tdName);

     
        const tdCourse = document.createElement("td");
        tdCourse.textContent = stu.course;
        tr.appendChild(tdCourse);

       
        const tdAction = document.createElement("td");
        const btn = document.createElement("button");
        btn.textContent = "Delete";
       
        btn.addEventListener("click", function () {
       
          const ok = confirm("Are you sure you want to delete this record?");
          if (!ok) return;

   
          tr.remove();


        });

        tdAction.appendChild(btn);
        tr.appendChild(tdAction);

        tbody.appendChild(tr);
      });
    }
    document.addEventListener("DOMContentLoaded", function () {
      renderTable();
    });


// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

    document.addEventListener('DOMContentLoaded', () => {
      const img = document.getElementById('myImage');
      const firstSrc = img.src;
      const hoverSrc = 'flowerimg.jppeg';

      img.addEventListener('mouseover', () => {
        img.src = hoverSrc;
      });

      img.addEventListener('mouseout', () => {
        img.src = firstSrc;
      });
    });
