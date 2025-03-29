const doctorsData = {
    doctors: [
        {
            id: "dr-sharma",
            name: "Dr. Rajesh Sharma",
            specialization: "Cardiology",
            degree: "MD, DM (Cardiology)",
            experience: "15 years",
            rating: 4.8,
            languages: ["English", "Hindi", "Odia"],
            availability: "Mon-Sat",
            hospital: "City Hospital, Bhubaneswar"
        },
        {
            id: "dr-patel",
            name: "Dr. Priya Patel",
            specialization: "Neurology",
            degree: "MBBS, MD (Neurology)",
            experience: "12 years",
            rating: 4.7,
            languages: ["English", "Hindi", "Gujarati"],
            availability: "Mon-Fri",
            hospital: "Healthcare Plus, Mumbai"
        },
        {
            id: "dr-das",
            name: "Dr. Amit Das",
            specialization: "Dental Care",
            degree: "BDS, MDS",
            experience: "10 years",
            rating: 4.6,
            languages: ["English", "Hindi", "Bengali"],
            availability: "Mon-Sat",
            hospital: "City Care Hospital, Delhi"
        },
        {
            id: "dr-reddy",
            name: "Dr. Lakshmi Reddy",
            specialization: "Eye Care",
            degree: "MBBS, MS (Ophthalmology)",
            experience: "14 years",
            rating: 4.9,
            languages: ["English", "Telugu", "Hindi"],
            availability: "Mon-Sat",
            hospital: "Medical Center, Hyderabad"
        },
        {
            id: "dr-kumar",
            name: "Dr. Sunil Kumar",
            specialization: "Cardiology",
            degree: "MD, DNB (Cardiology)",
            experience: "18 years",
            rating: 4.9,
            languages: ["English", "Hindi", "Odia"],
            availability: "Mon-Fri",
            hospital: "Healthcare Plus, Bangalore"
        },
        {
            id: "dr-iyer",
            name: "Dr. Meera Iyer",
            specialization: "Pediatrics",
            degree: "MBBS, MD (Pediatrics)",
            experience: "13 years",
            rating: 4.8,
            languages: ["English", "Malayalam", "Hindi"],
            availability: "Mon-Sat",
            hospital: "City Care Hospital, Chennai"
        },
        {
            id: "dr-singh",
            name: "Dr. Vikram Singh",
            specialization: "Orthopedics",
            degree: "MBBS, MS (Orthopedics)",
            experience: "16 years",
            rating: 4.7,
            languages: ["English", "Hindi", "Punjabi"],
            availability: "Mon-Fri",
            hospital: "Medical Center, Kolkata"
        },
        {
            id: "dr-verma",
            name: "Dr. Anjali Verma",
            specialization: "Oncology",
            degree: "MBBS, MD (Oncology)",
            experience: "11 years",
            rating: 4.6,
            languages: ["English", "Hindi", "Marathi"],
            availability: "Mon-Sat",
            hospital: "Healthcare Plus, Mumbai"
        },
        {
            id: "dr-mishra",
            name: "Dr. Arun Mishra",
            specialization: "Neurology",
            degree: "MBBS, DM (Neurology)",
            experience: "15 years",
            rating: 4.8,
            languages: ["English", "Hindi", "Odia"],
            availability: "Mon-Fri",
            hospital: "City Hospital, Bhubaneswar"
        },
        {
            id: "dr-sen",
            name: "Dr. Ritu Sen",
            specialization: "Dental Care",
            degree: "BDS, MDS",
            experience: "9 years",
            rating: 4.5,
            languages: ["English", "Bengali", "Hindi"],
            availability: "Mon-Sat",
            hospital: "Medical Center, Kolkata"
        }
    ],
    serviceTypes: [
        { id: "cardiology", name: "Cardiology Services" },
        { id: "dental", name: "Dental Services" },
        { id: "eyeCare", name: "Eye Care Services" }
    ]
};

function initializeDoctorsSlider() {
    const doctorsContainer = document.getElementById('doctors-slider');
    let currentPosition = 0;
    const slidesToShow = window.innerWidth < 768 ? 1 : 3;

    // Create doctors slider HTML
    doctorsData.doctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-slide';
        doctorCard.innerHTML = `
            <div class="doctor-card">
                <div class="doctor-info">
                    <h3>${doctor.name}</h3>
                    <p class="degree">${doctor.degree}</p>
                    <p class="specialization">${doctor.specialization}</p>
                    <div class="rating">
                        ${getRatingStars(doctor.rating)}
                        <span>${doctor.rating}/5</span>
                    </div>
                    <p class="experience">${doctor.experience} Experience</p>
                    <p class="hospital">${doctor.hospital}</p>
                    <p class="availability">Available: ${doctor.availability}</p>
                </div>
            </div>
        `;
        doctorsContainer.appendChild(doctorCard);
    });

    // Add navigation buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'slider-nav prev';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    
    const nextButton = document.createElement('button');
    nextButton.className = 'slider-nav next';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';

    doctorsContainer.parentElement.appendChild(prevButton);
    doctorsContainer.parentElement.appendChild(nextButton);

    // Navigation functionality
    prevButton.addEventListener('click', () => {
        currentPosition = Math.min(currentPosition + 100, 0);
        updateSliderPosition();
    });

    nextButton.addEventListener('click', () => {
        const maxScroll = -(Math.ceil(doctorsData.doctors.length / slidesToShow - 1) * 100);
        currentPosition = Math.max(currentPosition - 100, maxScroll);
        updateSliderPosition();
    });

    function updateSliderPosition() {
        doctorsContainer.style.transform = `translateX(${currentPosition}%)`;
    }
}

function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDoctorsSlider); 