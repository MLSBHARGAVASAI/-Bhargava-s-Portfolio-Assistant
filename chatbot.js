const messagesContainer = document.getElementById("messages");
const inputField = document.getElementById("user-input");

let userName = null;
let greeted = false;

// ---------------- Resume Data ----------------
const resume = {
    name: "Macharla Lakshmi Srinivasa Bhargava Sai",
    email: "mlsbhargavasai5002@gmail.com",
    phone: "+91 9701690665",
    location: "Tenali, Andhra Pradesh",
    linkedin: "https://www.linkedin.com/in/macharla-lakshmi-srinivasa-bhargava-sai-980bb4312",
    github: "https://github.com/MLSBHARGAVASAI",
    leetcode: "https://leetcode.com/u/MLSBHARGAVASAI/",
    liveProject: "https://meowgames.netlify.app/",

    education: [
        { institution: "Vignan’s Foundation for Science, Technology & Research", degree: "B.Tech in AI & ML", cgpa: "8.12/10", duration: "2022 – Present" },
        { institution: "St. John’s English Medium School", degree: "12th Grade (CBSE)", percentage: "86%", duration: "2020 – 2022" },
        { institution: "Bhashyam High School", degree: "10th Grade (SSC)", percentage: "97%", duration: "2019 – 2020" }
    ],

    skills: {
        languages: ["Python", "C", "Java", "SQL"],
        frameworks: ["MERN Stack", "Machine Learning", "Deep Learning", "Android (Java)"],
        softSkills: ["Problem-Solving", "Leadership", "Adaptability", "Creativity"]
    },

    experience: [
        { role: "Industrial Internship", company: "Robocoupler Pvt. Ltd.", project: "Humanoid Robots", year: "2025" }
    ],

    certifications: [
        { title: "Introduction to Generative AI", provider: "Google Cloud & Coursera", year: "2025" },
        { title: "MERN Full Stack", provider: "byteXL", year: "Aug 2024 – Nov 2024" },
        { title: "TCS iON Career Edge – Young Professional", provider: "TCS", year: "2025" },
        { title: "AI Python for Beginners", provider: "DeepLearning.AI", year: "2025" },
        { title: "ChatGPT Prompt Engineering", provider: "DeepLearning.AI", year: "2025" },
        { title: "GenAI Job Simulation", provider: "Forage", year: "2025" },
        { title: "Responsible & Safe AI Systems", provider: "NPTEL (Elite Certified)", year: "2024" },
        { title: "Preliminary English Test", provider: "Cambridge University", year: "2023" }
    ],

    achievements: [
        "Participated in Web Development Hackathon, Vignan’s University (2025)",
        "3rd Place, Technical Quiz, Vignan’s University (2025)",
        "One Act Play – YUVA BHERI, South Zone recognition (Aug 2024 – Nov 2024)",
        `Short Film: <a href="https://youtu.be/DJ17u_zPV-g" target="_blank">Pramod – One & Only Two</a>, 1st Prize VISIT 2K25 & Special Jury Award at Chitramela 2K25`
    ],

    extracurricular: [
        "Lead, Mahotsav 2K25: Managed dramatics & filmmaking events at a national-level festival (Feb 2025)",
        "Theatre Arts Club, Vignan’s University – Deputy Secretary: Directed & scripted stage plays (2023–2025)",
        "Theatre Arts Club, Vignan’s University – Chief Secretary: Mentored juniors in acting and stage production (2023–24 & 2024–25)"
    ],

    projects: [
        {
            name: "Ensemble Fake Review Detection",
            description: [
                "2024–2025",
                "• Built an ensemble model combining Random Forest, SVM, MLP, GRU, and LSTM to detect fraudulent product reviews with high accuracy.",
                "• Performed data preprocessing, feature engineering, and hyperparameter tuning to minimize false positives."
            ]
        },
        {
            name: "Android Weather App",
            description: [
                "• Developed an Android app using Java and Retrofit, integrating OpenStreetMap & Open-Meteo APIs for real-time updates.",
                "• Designed a clean UI with animated weather cards and adaptive light/dark themes."
            ]
        },
        {
            name: "Interactive Web Games Platform – Meow Games",
            description: [
                "2025",
                "• Created a responsive collection of 10 browser games using React.js.",
                "• Implemented React hooks, state management, and mobile-friendly designs for smooth gameplay.",
                `• Try the games online here: <a href="https://meowgames.netlify.app/" target="_blank">Meow Games</a>`
            ]
        }
    ]
};

// ---------------- Resume Patterns ----------------
const patterns = [
    { 
        pattern: /achieve(?:ments?)?|accomplishments?/i, 
        responses: [() => `
🏆 Achievements:
<ul>${resume.achievements.map(a => `<li>${a}</li>`).join("")}</ul>`] 
    },
    { 
        pattern: /projects|portfolio|games/i, 
        responses: [() => `
🚀 Projects:
${resume.projects.map(p => `<b>${p.name}</b>:<br>${p.description.join("<br>")}`).join("<br><br>")}`] 
    },
    { 
        pattern: /skills|abilities|tech/i, 
        responses: [() => `
💡 Skills:
<b>Languages:</b> ${resume.skills.languages.join(", ")}<br>
<b>Frameworks:</b> ${resume.skills.frameworks.join(", ")}<br>
<b>Soft Skills:</b> ${resume.skills.softSkills.join(", ")}`] 
    },
    { 
        pattern: /education|degree|study|studies/i, 
        responses: [() => `
🎓 Education:
${resume.education.map(e => `<b>${e.degree}</b> at ${e.institution} (${e.duration})<br>` + (e.cgpa ? `CGPA: ${e.cgpa}` : e.percentage ? `Percentage: ${e.percentage}` : "")).join("<br><br>")}`] 
    },
    { 
        pattern: /experience|internship|intern/i, 
        responses: [() => `
💼 Experience:
${resume.experience.map(exp => `<b>${exp.role}</b> at ${exp.company} (${exp.year})<br>Project: ${exp.project}`).join("<br><br>")}`] 
    },
    { 
        pattern: /certifications|certificate/i,
        responses: [() => `
📜 Certifications:
<ul>${resume.certifications.map(c => `<li>${c.title} – ${c.provider} (${c.year})</li>`).join("")}</ul>`] 
    },
    { 
        pattern: /extracurricular|activities|clubs/i, 
        responses: [() => `
🎭 Extracurricular Activities:
<ul>${resume.extracurricular.map(a => `<li>${a}</li>`).join("")}</ul>`] 
    },
    { 
        pattern: /hi|hello|hey/i, 
        responses: [
            () => greeted 
                ? `Hello again, ${userName}! 👋 How can I help you today?` 
                : `👋 Hi! I’m ${resume.name}'s assistant. What’s your name? Say 'I am [Your Name]' or ask about achievements, skills, projects, etc.`
        ] 
    },
    {
        pattern: /^(?:i am|my name is)\s+([a-zA-Z ]+)$/i,
        responses: [
            (match) => {
                const possibleName = match[1].trim();
                const notNames = ["fine","good","ok","okay","hello","hi","hey","happy","sad","tired"];
                if (!/^[a-zA-Z\s]{2,}$/.test(possibleName) || notNames.includes(possibleName.toLowerCase())) {
                    return "I think that’s not a name 😅. Please tell me your name like: 'I am [Your Name]'";
                }
                if (!greeted) {
                    userName = possibleName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
                    greeted = true;
                    return `Nice to meet you, ${userName}! 😊 How can I assist you with ${resume.name}'s portfolio?`;
                } else {
                    return `I already know you as ${userName}. Want to change it? Or ask about skills, projects, or more!`;
                }
            }
        ]
    },
    { pattern: /bye|goodbye|see you|exit/i, responses: ["Thank you 😊 for visiting my portfolio. Goodbye!"] },
    { pattern: /name/i, responses: [() => userName ? `You can call me ${resume.name}'s assistant. Your name is ${userName}, right?` : `I’m ${resume.name}'s assistant. What’s your name? Say 'I am [Your Name]'`] },
    { pattern: /email|mail|mail id/i, responses: [`📧 Email: <a href="mailto:${resume.email}">${resume.email}</a>`] },
    { pattern: /phone|contact|mobile/i, responses: [`📞 Contact Number: <a href="tel:${resume.phone}">${resume.phone}</a>`] },
    { pattern: /linkedin|linked in/i, responses: [`🔗 LinkedIn: <a href="${resume.linkedin}" target="_blank">LinkedIn</a>`] },
    { pattern: /github|git/i, responses: [`💻 GitHub: <a href="${resume.github}" target="_blank">GitHub</a>`] },
    { pattern: /leetcode|leet code/i, responses: [`🧩 LeetCode: <a href="${resume.leetcode}" target="_blank">LeetCode</a>`] },
    { pattern: /short\s?film|film|movie/i, responses: [() => `🎬 Short Film: <a href="https://youtu.be/DJ17u_zPV-g" target="_blank">Pramod – One & Only Two</a>`] },
    { pattern: /live\s?project|demo|deployment/i, responses: [`🌐 Live Project: <a href="${resume.liveProject}" target="_blank">Meow Games</a>.`] },
    { pattern: /who are you|about you|introduce/i, responses: [`🤖 I’m ${resume.name}'s AI-powered resume assistant. Ask me about skills, projects, education, experience, certifications, or more!`] },
    { pattern: /location|where do you live|address/i, responses: [`📍 Location: ${resume.location}.`] }
];

// ---------------- Fallback ----------------
const fallbackResponses = [
    "I can only answer questions related to Macharla Lakshmi Srinivasa Bhargava Sai's portfolio. 📑 Try asking about skills, projects, achievements, or certifications!",
    "Please ask about skills, projects, education, experience, certifications, or extracurriculars. 🎓💻",
    "I specialize in talking about Macharla Lakshmi Srinivasa Bhargava Sai’s resume. Want to know about his projects, skills, or certifications?",
    "I may not understand that fully 🤔. Try asking about education, experience, or certifications.",
    "That’s outside my scope 🚫. Ask about the portfolio, like achievements or internships!"
];

// ---------------- Reply Generator ----------------
function getBotReply(msg) {
    const normalizedMsg = msg.trim().replace(/[.,!?]$/, '').toLowerCase();
    for (let entry of patterns) {
        const match = normalizedMsg.match(entry.pattern);
        if (match) {
            let response = entry.responses[Math.floor(Math.random() * entry.responses.length)];
            if (typeof response === "function") response = response(match);
            return response;
        }
    }
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

// ---------------- UI Functions ----------------
function addMessage(sender, text) {
    const wrapper = document.createElement("div");
    wrapper.className = `message ${sender}-message`;
    wrapper.setAttribute("role", "article");
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerHTML = text;
    wrapper.appendChild(bubble);
    messagesContainer.appendChild(wrapper);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

let isSending = false;
function sendMessage() {
    if (isSending) return;
    isSending = true;
    const userText = inputField.value.trim();
    if (!userText) { isSending = false; return; }
    if (userText.length > 200) {
        addMessage("bot", "Whoa, that's a long message! 😅 Please keep it under 200 characters.");
        inputField.value = "";
        isSending = false;
        return;
    }
    addMessage("user", userText);
    const typingIndicator = addTypingIndicator();
    setTimeout(() => {
        typingIndicator.remove();
        addMessage("bot", getBotReply(userText));
        isSending = false;
    }, 400);
    inputField.value = "";
}

function addTypingIndicator() {
    const wrapper = document.createElement("div");
    wrapper.className = "message bot-message typing";
    wrapper.innerHTML = '<div class="bubble">Typing...</div>';
    messagesContainer.appendChild(wrapper);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return wrapper;
}

inputField.addEventListener("keypress", e => { if (e.key === "Enter") sendMessage(); });
messagesContainer.setAttribute("role", "log");
messagesContainer.setAttribute("aria-live", "polite");

// -------- Initial Greeting --------
addMessage("bot", `👋 Hi! I’m ${resume.name}'s assistant. Ask about achievements, skills, projects, certifications, or say 'I am [Your Name]' to introduce yourself!`);
