const hospitalData = {
    locations: [
        {
            id: "bhubaneswar",
            name: "Bhubaneswar",
            hospitals: [
                {
                    id: "city-care-bhubaneswar",
                    name: "City Care Hospital",
                    address: "123 Medical Complex, Bhubaneswar",
                    topServices: ["Cardiology", "Orthopedics", "Neurology", "Pediatrics"],
                    services: [
                        {
                            id: "cardiology",
                            name: "Cardiology",
                            description: "Complete heart care services"
                        },
                        {
                            id: "dental",
                            name: "Dental Care",
                            description: "Comprehensive dental services"
                        },
                        {
                            id: "eye-care",
                            name: "Eye Care",
                            description: "Professional eye health services"
                        }
                    ],
                    rating: 4.6,
                    facilities: ["24/7 Emergency", "ICU", "Operation Theater", "Laboratory"]
                },
                {
                    id: "healthcare-plus-bhubaneswar",
                    name: "Healthcare Plus",
                    address: "456 Health Avenue, Bhubaneswar",
                    topServices: ["Oncology", "Cardiology", "Orthopedics", "Dental Care"],
                    services: [
                        {
                            id: "cardiology",
                            name: "Cardiology",
                            description: "Complete heart care services"
                        },
                        {
                            id: "dental",
                            name: "Dental Care",
                            description: "Comprehensive dental services"
                        },
                        {
                            id: "eye-care",
                            name: "Eye Care",
                            description: "Professional eye health services"
                        }
                    ],
                    rating: 4.4,
                    facilities: ["24/7 Emergency", "ICU", "Operation Theater", "Laboratory"]
                }
            ]
        },
        {
            id: "cuttack",
            name: "Cuttack",
            hospitals: [
                {
                    id: "medical-center-cuttack",
                    name: "Medical Center",
                    address: "789 Health Street, Cuttack",
                    topServices: ["Cardiology", "Neurology", "Pediatrics", "Orthopedics"],
                    services: [
                        {
                            id: "cardiology",
                            name: "Cardiology",
                            description: "Complete heart care services"
                        },
                        {
                            id: "dental",
                            name: "Dental Care",
                            description: "Comprehensive dental services"
                        },
                        {
                            id: "eye-care",
                            name: "Eye Care",
                            description: "Professional eye health services"
                        }
                    ],
                    rating: 4.3,
                    facilities: ["24/7 Emergency", "ICU", "Operation Theater", "Laboratory"]
                }
            ]
        },
        {
            id: "delhi",
            name: "Delhi",
            hospitals: [
                {
                    id: "city-hospital-delhi",
                    name: "City Hospital",
                    address: "123 Medical Complex, Delhi",
                    topServices: ["Cardiology", "Oncology", "Neurology", "Orthopedics"],
                    services: [
                        {
                            id: "cardiology",
                            name: "Cardiology",
                            description: "Complete heart care services"
                        },
                        {
                            id: "dental",
                            name: "Dental Care",
                            description: "Comprehensive dental services"
                        },
                        {
                            id: "eye-care",
                            name: "Eye Care",
                            description: "Professional eye health services"
                        }
                    ],
                    rating: 4.7,
                    facilities: ["24/7 Emergency", "ICU", "Operation Theater", "Laboratory"]
                }
            ]
        },
        {
            id: "mumbai",
            name: "Mumbai",
            hospitals: [
                {
                    id: "healthcare-plus-mumbai",
                    name: "Healthcare Plus",
                    address: "456 Health Avenue, Mumbai",
                    topServices: ["Oncology", "Cardiology", "Neurology", "Pediatrics"],
                    services: [
                        {
                            id: "cardiology",
                            name: "Cardiology",
                            description: "Complete heart care services"
                        },
                        {
                            id: "dental",
                            name: "Dental Care",
                            description: "Comprehensive dental services"
                        },
                        {
                            id: "eye-care",
                            name: "Eye Care",
                            description: "Professional eye health services"
                        }
                    ],
                    rating: 4.8,
                    facilities: ["24/7 Emergency", "ICU", "Operation Theater", "Laboratory"]
                }
            ]
        },
        {
            id: "bangalore",
            name: "Bangalore",
            hospitals: [
                {
                    id: "medical-center-bangalore",
                    name: "Medical Center",
                    address: "789 Health Street, Bangalore",
                    topServices: ["Cardiology", "Orthopedics", "Neurology", "Oncology"],
                    services: [
                        {
                            id: "cardiology",
                            name: "Cardiology",
                            description: "Complete heart care services"
                        },
                        {
                            id: "dental",
                            name: "Dental Care",
                            description: "Comprehensive dental services"
                        },
                        {
                            id: "eye-care",
                            name: "Eye Care",
                            description: "Professional eye health services"
                        }
                    ],
                    rating: 4.6,
                    facilities: ["24/7 Emergency", "ICU", "Operation Theater", "Laboratory"]
                }
            ]
        },
        {
            id: "chennai",
            name: "Chennai",
            hospitals: [
                {
                    id: "city-care-chennai",
                    name: "City Care Hospital",
                    address: "123 Medical Complex, Chennai",
                    topServices: ["Cardiology", "Neurology", "Pediatrics", "Orthopedics"],
                    services: [
                        {
                            id: "cardiology",
                            name: "Cardiology",
                            description: "Complete heart care services"
                        },
                        {
                            id: "dental",
                            name: "Dental Care",
                            description: "Comprehensive dental services"
                        },
                        {
                            id: "eye-care",
                            name: "Eye Care",
                            description: "Professional eye health services"
                        }
                    ],
                    rating: 4.5,
                    facilities: ["24/7 Emergency", "ICU", "Operation Theater", "Laboratory"]
                }
            ]
        },
        {
            id: "kolkata",
            name: "Kolkata",
            hospitals: [
                {
                    id: "healthcare-plus-kolkata",
                    name: "Healthcare Plus",
                    address: "456 Health Avenue, Kolkata",
                    topServices: ["Cardiology", "Orthopedics", "Neurology", "Pediatrics"],
                    services: [
                        {
                            id: "cardiology",
                            name: "Cardiology",
                            description: "Complete heart care services"
                        },
                        {
                            id: "dental",
                            name: "Dental Care",
                            description: "Comprehensive dental services"
                        },
                        {
                            id: "eye-care",
                            name: "Eye Care",
                            description: "Professional eye health services"
                        }
                    ],
                    rating: 4.4,
                    facilities: ["24/7 Emergency", "ICU", "Operation Theater", "Laboratory"]
                }
            ]
        },
        {
            id: "hyderabad",
            name: "Hyderabad",
            hospitals: [
                {
                    id: "medical-center-hyderabad",
                    name: "Medical Center",
                    address: "789 Health Street, Hyderabad",
                    topServices: ["Cardiology", "Neurology", "Orthopedics", "Pediatrics"],
                    services: [
                        {
                            id: "cardiology",
                            name: "Cardiology",
                            description: "Complete heart care services"
                        },
                        {
                            id: "dental",
                            name: "Dental Care",
                            description: "Comprehensive dental services"
                        },
                        {
                            id: "eye-care",
                            name: "Eye Care",
                            description: "Professional eye health services"
                        }
                    ],
                    rating: 4.3,
                    facilities: ["24/7 Emergency", "ICU", "Operation Theater", "Laboratory"]
                }
            ]
        }
    ]
};

function initializeHospitalComparison() {
    const locationSelect = document.getElementById('location-select');
    const hospitalSelect = document.getElementById('hospital-select');
    const serviceSelect = document.getElementById('service-select');
    const comparisonResult = document.getElementById('comparison-result');

    // Populate location dropdown
    locationSelect.innerHTML = '<option value="">Select Location</option>';
    hospitalData.locations.forEach(location => {
        locationSelect.innerHTML += `<option value="${location.id}">${location.name}</option>`;
    });

    // Update hospital dropdown when location changes
    locationSelect.addEventListener('change', () => {
        const selectedLocation = hospitalData.locations.find(loc => loc.id === locationSelect.value);
        hospitalSelect.innerHTML = '<option value="">Select Hospital</option>';
        
        if (selectedLocation) {
            selectedLocation.hospitals.forEach(hospital => {
                hospitalSelect.innerHTML += `<option value="${hospital.id}">${hospital.name}</option>`;
            });
        }
    });

    // Update service dropdown when hospital changes
    hospitalSelect.addEventListener('change', () => {
        const selectedLocation = hospitalData.locations.find(loc => loc.id === locationSelect.value);
        const selectedHospital = selectedLocation?.hospitals.find(hosp => hosp.id === hospitalSelect.value);
        serviceSelect.innerHTML = '<option value="">Select Service</option>';
        
        if (selectedHospital) {
            selectedHospital.services.forEach(service => {
                serviceSelect.innerHTML += `<option value="${service.id}">${service.name}</option>`;
            });
        }
    });

    // Show comparison when service is selected
    serviceSelect.addEventListener('change', () => {
        const selectedLocation = hospitalData.locations.find(loc => loc.id === locationSelect.value);
        const selectedHospital = selectedLocation?.hospitals.find(hosp => hosp.id === hospitalSelect.value);
        const selectedService = selectedHospital?.services.find(serv => serv.id === serviceSelect.value);
        
        if (selectedService) {
            comparisonResult.innerHTML = `
                <div class="comparison-card">
                    <h3>${selectedHospital.name}</h3>
                    <p class="address">${selectedHospital.address}</p>
                    <p class="service">${selectedService.name}</p>
                    <p class="description">${selectedService.description}</p>
                    <div class="rating">
                        ${getRatingStars(selectedHospital.rating)}
                        <span>${selectedHospital.rating}/5</span>
                    </div>
                    <div class="top-services">
                        <h4>Top Services:</h4>
                        <ul>
                            ${selectedHospital.topServices.map(service => `<li>${service}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="facilities">
                        <h4>Facilities:</h4>
                        <ul>
                            ${selectedHospital.facilities.map(facility => `<li data-facility="${facility}">${facility}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        } else {
            comparisonResult.innerHTML = '';
        }
    });
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
document.addEventListener('DOMContentLoaded', initializeHospitalComparison); 