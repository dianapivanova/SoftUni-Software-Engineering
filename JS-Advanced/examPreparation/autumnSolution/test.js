document.body.innerHTML =`
<h1>Autumn Adventures</h1>
<div id="wrapper">
  <div class="content-first">
    <div id="form">
      <p>Add Autumn Event</p>
    <form>
      <div>
        <label for="time">When:</label>
        <input id="time" type="time">
        <input id="date" type="date">
      </div>
      <div>
        <label for="place">Place:</label>
        <input id="place" type="text" placeholder="Place">
      </div>
      <div>
        <label for="event-name">Event:</label>
        <input id="event-name" type="text" placeholder="Event Name">
      </div>
      <div>
        <label for="email">Contacts:</label>
        <input id="email" type="email" placeholder="Email">
      </div>
     
      <input id="add-btn" type="button" value="Add Event">
    </form>
    </div>
    <div id="first-field">
      <p>Upcoming</p>
      <ul id="upcoming-list"></ul>
    </div>
  </div>
  <div class="content-second">
    <div id="second-field">
      <p>Last Check</p>
      <ul id="check-list"></ul>
    </div>
    <div id="third-field">
      <p>Finished</p>
      <ul id="finished-list"></ul>
      <button id="clear">Clear</button>
    </div>
  </div>
</div>

<script src="app.js"></script>
`
result();
const addEvent= {


      time: () => document.getElementById('time'),
      date: () => document.getElementById('date'),
      place: () => document.getElementById('place'),
      eventName: () => document.getElementById('event-name'),
      email: () => document.getElementById('email'),
      addBtn: () => document.getElementById('add-btn')     
}
addEvent.time().value = "12:00";
addEvent.date().value = "23.12.2023";
addEvent.place().value = "Sofia";
addEvent.eventName().value = "Best of 2023";
addEvent.email().value = "best@abv.bg";

addEvent.addBtn().click();

document.querySelector('.continue-btn').click();
document.querySelector('.finished-btn').click();
document.querySelector('#clear').click();


expect($(document.querySelector("#finished-list > li")).length).to.equal(0, "Information for the reservation must be removed from the ul list")


expect(document.querySelectorAll("#check-list > li > article > p")[0].textContent).to.equal("Begins: 23.12.2023 at: 12:00", "time is invalid!");
expect(document.querySelectorAll("#check-list > li > article > p")[1].textContent).to.equal("In: Sofia", "Location is invalid!");
expect(document.querySelectorAll("#check-list > li > article > p")[2].textContent).to.equal("Event: Best of 2023", " Name is invalid!");
expect(document.querySelectorAll("#check-list > li > article > p")[3].textContent).to.equal("Contact: best@abv.bg", "email is invalid!");



expect($(document.querySelectorAll("#upcoming-list > li > button")).length).to.equal(1, "Buttons are not added successfully!")

// document.querySelector('.edit-btn').click();

// expect($("#add-btn").prop('disabled'), 'Add button was not disabled').to.be.false;

// expect($(document.querySelector("#check-list > li")).length).to.equal(0, "Information for the reservation must be removed from the ul list")

// expect($(document.getElementById("time")).val()).to.equal('12:00', 'Time input field is empty was not cleared');
// expect($(document.getElementById("date")).val()).to.equal('23.12.2023', 'Date input field is empty');
// expect($(document.getElementById("place")).val()).to.equal('Sofia', 'Place input field is empty');
// expect($(document.getElementById("event-name")).val()).to.equal('Best of 2023', 'Event name input field is empty');
// expect($(document.getElementById("email")).val()).to.equal('best@abv.bg', 'Email input field is empty');




// expect($("#add-btn").prop('disabled'), 'Add button was not disabled').to.be.true;

// expect($(document.querySelector(".check-list > li")).length).to.equal(0, "Missing Email")


// expect($(document.getElementById("time")).val()).to.equal('', 'time input field was not cleared');
// expect($(document.getElementById("date")).val()).to.equal('', 'date input field was not cleared');
// expect($(document.getElementById("place")).val()).to.equal('', 'place input field was not cleared');
// expect($(document.getElementById("event-name")).val()).to.equal('', 'event input field was not cleared');
// expect($(document.getElementById("email")).val()).to.equal('', 'email input field was not cleared');

// expect($(document.querySelector("#check-list > li")).length).to.equal(1, "The event info must be added to the list")