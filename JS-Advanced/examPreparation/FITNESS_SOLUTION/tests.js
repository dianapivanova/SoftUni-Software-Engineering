document.body.innerHTML =`
<div id="main">
<section id="start">
    <img src="./static/img/dumbell.png" alt="">
    <h1>Start Your Fitness Journey with Us</h1>
    <img src="./static/img/dumbell.png" alt="">
</section>

<div id="wrapper">

    <section id="info-section">
        <div class="section-container"> 
                         
            <h1>Pick Class</h1>
            
            <div class="container-text">
                <form action="">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name">

                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email">                     

                        <label for="contact-number">Contact Number:</label>
                        <input type="number" id="contact-number" name="contact-number" >

                        <label for="Preferred Class Type">Preferred Class Type:</label>
                        <select type="" id="class-type" name="class-type">
                            <option value=""></option>
                            <option value="Yoga">Yoga</option>
                            <option value="Zumba">Zumba</option>
                            <option value="Kango Jumps">Kango Jumps</option>
                            <option value="Pilates">Pilates</option>
                        </select>
                        <label for="class-time">Preferred Class Time:</label>
                        <select type="" id="class-time" name="class-time">
                            <option value=""></option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">18:00</option>
                        </select>
                        
                    <button id="next-btn" type="submit">Next</button>
                </form>
                

            </div>
        </div>
    </section>

    <section id="preview-section">
        <div class="preview-info-container">
            <div class="section-container"> 
            <h1>Preview</h1>
            <ul class="class-info">
            </ul>
        </div>
        </div>
    </section>

    <section id="confirm-section">
        <div class="confirm-container">
            <div class="section-container"> 
            <h1>Confirm Class</h1>
            <ul class="confirm-class">
            </ul>
        </div>
        </div>
    </section>
</div>

</div>

</div>
<footer>
<p>Exam @ SoftUni</p>
</footer>
<script src="app.js"></script>
`
result();
const GoToClass= {

      name: () => document.getElementById('name'),
      email: () => document.getElementById('email'),
      contact: () => document.getElementById('contact-number'),
      type: () => document.getElementById('class-type'),
      time: () => document.getElementById('class-time'),
      nextBtn: () => document.getElementById('next-btn')     
}
GoToClass.name().value = "John Doe";
GoToClass.email().value = "Doe@abv.bg";
GoToClass.contact().value = "1234567890";
GoToClass.type().value = "Yoga";
GoToClass.time().value = "17:00";



GoToClass.nextBtn().click();

document.querySelector('.continue-btn').click();
document.querySelector('.confirm-btn').click();

expect($(document.querySelector("#body > button")).textContent).to.equal("Done", "Button is invalid");



