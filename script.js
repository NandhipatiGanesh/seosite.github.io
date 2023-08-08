function myFunction (x) {
    x.classList.toggle("change");

    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};
/*tabs script*/
function openTab(tabName) {
    const tabs = document.querySelectorAll('.plans-li');
    const tabContents = document.querySelectorAll('.monthly-plan-content, .yearly-plan-content');
  
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
  
    const selectedTab = document.getElementById(`${tabName}Tab`);
    const selectedTabButton = document.getElementById(`tab${tabName === 'monthly' ? '1' : '2'}`);
  
    selectedTabButton.classList.add('active');
    selectedTab.classList.add('active');
  }
  
  // Activate the "Monthly Plan" tab and its content by default
  window.addEventListener('DOMContentLoaded', function () {
    openTab('monthly');
  });
  