const filterDiv = document.querySelector(".button-container");

      const images = document.querySelectorAll(".image-item");
      
      
      const handleFilter = (e) => {
        if(!e.target.classList.contains("filter-btn")){
          return;
        }
        
        const category = e.target.getAttribute("data-category");
        
        images.forEach((item) => {
          
          if(category === "all" || item.getAttribute("data-category") === category){
            item.style.display = "block";
          }else{
            item.style.display = "none";
          }
          
          
        }); 
        
      }

      filterDiv.addEventListener("click", handleFilter);