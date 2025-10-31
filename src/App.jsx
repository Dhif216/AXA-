import React, { useState } from "react"; // 1. Import useState
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import heroVideo from "./assets/Barber_Shop_Transformation_Video.mp4";
import aboutVideo from "./assets/Royal_Grooming_A_Cinematic_Barber_Scene.mp4";

function App() {
  // 2. Initialize state for menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // 3. Toggle function for the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <i className="fas fa-cut"></i>
            <span>AXA Barber Shop</span>
          </div>
          {/* 4. Conditionally add 'open' class to nav-menu */}
          <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
            {/* 5. Add onClick to close menu on link click */}
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
            <li><a href="#booking" className="btn-nav" onClick={toggleMenu}>Book Now</a></li>
          </ul>
          {/* 6. Add onClick handler to hamburger and conditionally add 'active' class */}
          <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Where Bad Hair Days Come to Die</h1>
          <p className="hero-subtitle">
            Premium cuts. Legendary vibes. Zero judgment for that quarantine mullet.
          </p>
          <a href="#booking" className="btn-primary">
            Book Your Resurrection
          </a>
          <div className="scroll-indicator">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </section>
      

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Weapons of Choice</h2>
          <p className="section-subtitle">
            We don't just cut hair. We perform miracles with scissors.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-scissors"></i></div>
              <h3>The Classic Cut</h3>
              <p className="price">$35</p>
              <p>Your grandfather's haircut, but make it 2025.</p>
            </div>

            <div className="service-card featured">
              <div className="badge">Most Popular</div>
              <div className="service-icon"><i className="fas fa-crown"></i></div>
              <h3>The Executive</h3>
              <p className="price">$75</p>
              <p>Cut + Beard Sculpt + Hot Towel Shave.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><i className="fas fa-fire"></i></div>
              <h3>Hot Towel Shave</h3>
              <p className="price">$45</p>
              <p>Straight razor therapy included.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><i className="fas fa-user-ninja"></i></div>
              <h3>Beard Sculpting</h3>
              <p className="price">€25</p>
              <p>From mountain man to gentleman.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><i className="fas fa-child"></i></div>
              <h3>Kids Cut</h3>
              <p className="price">$25</p>
              <p>We bribe them with candy. Everyone wins.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><i className="fas fa-magic"></i></div>
              <h3>The Transformer</h3>
              <p className="price">$90</p>
              <p>Full makeover. New you. Guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>More Than Just a Trim</h2>
              <p className="highlight">We're not your average snip-and-go joint.</p>
              <p>
                Founded in 2020 (yeah, during THAT year), The Sharp Cut became the neighborhood's
                therapy session disguised as a barber shop.
              </p>
              <p>
                We combine old-school barbering techniques with modern style trends.
              </p>
              <div className="stats">
                <div className="stat">
                  <h3>10,000+</h3>
                  <p>Lives Changed</p>
                </div>
                <div className="stat">
                  <h3>4.9★</h3>
                  <p>Google Reviews</p>
                </div>
                <div className="stat">
                  <h3>0</h3>
                  <p>Mullets Judged</p>
                </div>
              </div>
            </div>

            <div className="about-image">
              <video
                className="about-video"
                src={aboutVideo}
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <p className="video-caption">Your throne awaits</p>
            </div>
          </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">The Evidence</h2>
          <p className="section-subtitle">
            The “legends” who trusted us... kind of.
          </p>

          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <img src="https://machohairstyles.com/wp-content/uploads/2015/12/Weird-Face.jpg" alt="Client Transformation #1" />
              </div>
              <p>We told him to trust the process. Even we’re still waiting for it to finish.</p>
            </div>

            <div className="gallery-item">
              <div className="gallery-placeholder">
                <img src="https://i.pinimg.com/736x/1a/53/9f/1a539f25dc753e4ed311b55511e76e44.jpg" alt="Client Transformation #2" />
              </div>
              <p>This one asked for “something futuristic.” We gave him a look from 3025.</p>
            </div>

            <div className="gallery-item">
              <div className="gallery-placeholder">
                <img src="https://www.tastefullyoffensive.com/wp-content/uploads/2021/05/funny-bad-haricuts-23.jpg" alt="Client Transformation #3" />
              </div>
              <p>He said “surprise me.” We did. He’s still surprised.</p>
            </div>

            <div className="gallery-item">
              <div className="gallery-placeholder">
                <img src="https://i.pinimg.com/736x/ad/00/b6/ad00b6f3bbed676602325692e2d4a52d.jpg" alt="Client Transformation #3" />
              </div>
              <p>We told him the spider was optional. He disagreed..</p>
            </div>

            <div className="gallery-item">
              <div className="gallery-placeholder">
                <img src="https://m.media-amazon.com/images/I/51ft+O5ZhNL._AC_UF894,1000_QL80_.jpg" alt="Client Transformation #3" />
              </div>
              <p>He came in barking for a trim — left looking paw-sitively fabulous..</p>
            </div>

            <div className="gallery-item">
              <div className="gallery-placeholder">
                <img src="https://www.agirlandagluegun.com/wp-content/uploads/2021/10/crazy-creative-haircuts-9__605.jpg" alt="Client Transformation #4" />
              </div>
              <p>This masterpiece won ‘Most Talked About’ in the barbers’ group chat.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What People Are Saying</h2>
          <p className="section-subtitle">(We didn't pay them. Promise.)</p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "I walked in looking like a failed TikTok experiment. Walked out looking like I belong on a yacht."
              </p>
              <div className="testimonial-author">- Marcus T.</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "My barber knew what I wanted before I did. Either he's psychic or really good at his job."
              </p>
              <div className="testimonial-author">- James K.</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                "Best hot towel shave of my life. I may have fallen asleep. Don't tell my wife I said that."
              </p>
              <div className="testimonial-author">- David R.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="booking">
        <div className="container">
          <h2 className="section-title">Book Your Transformation</h2>
          <p className="section-subtitle">Your future self will thank you</p>

          <div className="booking-container">
            <form
              className="booking-form"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target;
                const formData = {
                  name: form.name.value,
                  phone: form.phone.value,
                  email: form.email.value,
                  service: form.service.value,
                  date: form.date.value,
                  time: form.time.value,
                  notes: form.notes.value,
                };

                const messageBox = document.getElementById("booking-message");

                try {
                  await fetch(
                    "https://script.google.com/macros/s/AKfycbzkxhlAjGDh_t17JLfZRWfZip0u5Sl3wri2scrCZUOfj2emxKpjngmJUA7zoowk5apPRw/exec",
                    {
                      method: "POST",
                      mode: "no-cors",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(formData),
                    }
                  );

                  // Show success message
                  messageBox.textContent = "✅ Booking submitted! We'll contact you soon.";
                  messageBox.style.color = "green";

                  form.reset();
                } catch (error) {
                  console.error(error);
                  messageBox.textContent = "❌ Something went wrong. Please try again.";
                  messageBox.style.color = "red";
                }
              }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Choose Your Destiny</label>
                  <select id="service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="classic">The Classic Cut - $35</option>
                    <option value="executive">The Executive - $75</option>
                    <option value="shave">Hot Towel Shave - $45</option>
                    <option value="beard">Beard Sculpting - $30</option>
                    <option value="kids">Kids Cut - $25</option>
                    <option value="transformer">The Transformer - $90</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input type="date" id="date" name="date" required />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time</label>
                  <select id="time" name="time" required>
                    <option value="">Select a time</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Special Requests (Optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Tell us if you want to fix your friend's haircut disaster..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary btn-submit">
                <span>Book Appointment</span>
                <i className="fas fa-arrow-right"></i>
              </button>

              {/* Inline message */}
              <div id="booking-message" style={{ marginTop: "15px", fontWeight: "bold" }}></div>
            </form>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3><i className="fas fa-cut"></i> AXA Barber Shop</h3>
              <p>Where legends are groomed.</p>
              <div className="social-links">
                <a href="https://www.instagram.com/axaparturi/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@axa.parturi/live?lang=jv-ID"><i className="fab fa-tiktok"></i></a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Hours</h4>
              <p>Mon - Fri: 10am - 8pm</p>
              <p>Saturday: 10am - 6pm</p>
              <p>Sunday: 11am - 6pm</p>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p><i className="fas fa-map-marker-alt"></i> Rullakkotori 1 LT 2, 00240 Helsinki</p>
              <p><i className="fas fa-phone"></i> 041 3134978</p>
              <p><i className="fas fa-envelope"></i> commingsoon</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 AXA Barber Shop. All rights reserved.</p>
          </div>
        </div>
      </footer> 
    </>
  );
}

export default App;