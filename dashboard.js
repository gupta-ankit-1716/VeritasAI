/**
 * PROJECT: VeritasAI Forensic Lab
 * AUTHOR: Ankit Kumar (IITRAM, Ahmedabad)
 * VERSION: 1.0.4
 * MODULE: System Neural Core
 * DESCRIPTION: Lead Engineering & Architecture
 */
console.log("%c VERITAS AI %c System Engineered by Ankit Kumar ", "background: #00E8FF; color: #000; font-weight: bold;", "background: #000; color: #00E8FF;");

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const fileInput = document.getElementById('file-input');
    const dropZone = document.getElementById('drop-zone');
    const analysisState = document.getElementById('analysis-state');
    const resultsState = document.getElementById('results-state');
    const progressBar = document.getElementById('progress-bar');
    const statusMsg = document.getElementById('status-msg');

    // 1. Session Timer Logic
    let startTime = Date.now();
    setInterval(() => {
        let elapsed = Math.floor((Date.now() - startTime) / 1000);
        let hrs = String(Math.floor(elapsed / 3600)).padStart(2, '0');
        let mins = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
        let secs = String(elapsed % 60).padStart(2, '0');
        document.getElementById('session-timer').innerText = `${hrs}:${mins}:${secs}`;
    }, 1000);

    // 2. File Selection Trigger
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleUpload(e.target.files[0].name);
        }
    });

    function handleUpload(fileName) {
        dropZone.classList.add('hidden');
        analysisState.classList.remove('hidden');

        let progress = 0;
        const messages = [
            "Initializing neural scan...",
            "Analyzing pixel artifacts...",
            "Detecting GAN fingerprints...",
            "Finalizing forensic report..."
        ];

        const interval = setInterval(() => {
            progress += 1;
            progressBar.style.width = progress + '%';

            if (progress % 25 === 0) {
                statusMsg.innerText = messages[Math.floor(progress / 25) - 1] || messages[3];
            }

            if (progress >= 100) {
                clearInterval(interval);
                showFinalResults(fileName);
            }
        }, 50); // ~5 second analysis
    }

    function showFinalResults(fileName) {
        analysisState.classList.add('hidden');
        resultsState.classList.remove('hidden');

        const isDeepfake = Math.random() > 0.4; // 60% chance of deepfake for demo
        const verdict = document.getElementById('verdict-text');
        const confidence = document.getElementById('confidence-val');

        if (isDeepfake) {
            verdict.innerText = "DEEPFAKE DETECTED";
            verdict.style.color = "#FF4B4B";
            confidence.innerText = (94 + Math.random() * 5).toFixed(1) + "%";
        } else {
            verdict.innerText = "AUTHENTIC MEDIA";
            verdict.style.color = "#00E8FF";
            confidence.innerText = (98 + Math.random() * 1).toFixed(1) + "%";
        }
    }

    // 3. Logout Logic
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('veritas_user');
        window.location.href = 'index.html';
    });
});


// Add this list of forensic logs to your dashboard.js
const forensicLogs = [
    ">> Loading weights for EfficientNet-B7...",
    ">> Establishing encrypted handshake with GPU_Node_04...",
    ">> Extracting facial landmarks (68 points detected)...",
    ">> WARN: Temporal jitter detected in frame sequence 104-120",
    ">> Analyzing frequency domain artifacts (DCT transform)...",
    ">> Checking for GAN-based fingerprint noise...",
    ">> ERROR: Discrepancy found in eye-reflection geometry",
    ">> Verifying lip-sync audio-to-visual coherence...",
    ">> Finalizing cross-referencing with known synthetic datasets...",
    ">> Generating forensic integrity report..."
];

function addLogLine(text) {
    const logBody = document.getElementById('terminal-log');
    const line = document.createElement('div');
    line.className = 'log-line';
    
    // Add warning/error colors if keywords found
    if (text.includes('WARN')) line.classList.add('warn');
    if (text.includes('ERROR')) line.classList.add('error');
    
    line.innerText = text;
    logBody.appendChild(line);
    
    // Auto-scroll to bottom
    logBody.scrollTop = logBody.scrollHeight;
}

// UPDATE your existing handleUpload(fileName) function:
function handleUpload(fileName) {
    dropZone.classList.add('hidden');
    analysisState.classList.remove('hidden');

    let progress = 0;
    let logIndex = 0;

    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + '%';

        // Add a new log line every 10% of progress
        if (progress % 10 === 0 && logIndex < forensicLogs.length) {
            addLogLine(forensicLogs[logIndex]);
            logIndex++;
        }

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => showFinalResults(fileName), 500);
        }
    }, 50); 
}


document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const navScan = document.getElementById('nav-scan');
    const navHistory = document.getElementById('nav-history');
    const navReports = document.getElementById('nav-reports');
    const navSettings = document.getElementById('nav-settings');

    const dropZone = document.getElementById('drop-zone');
    const historySection = document.querySelector('.history-section');

    // Utility to clear active states
    function clearActive() {
        [navScan, navHistory, navReports, navSettings].forEach(el => el.classList.remove('active'));
    }

    // New Analysis Button
    if (navScan) {
        navScan.addEventListener('click', () => {
            clearActive();
            navScan.classList.add('active');
            dropZone.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Scan History Button
    if (navHistory) {
        navHistory.addEventListener('click', () => {
            clearActive();
            navHistory.classList.add('active');
            // Scroll smoothly to the table
            historySection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // Pro Features (Reports & Settings)
//     [navReports, navSettings].forEach(btn => {
//         if (btn) {
//             btn.addEventListener('click', () => {
//                 alert("ACCESS RESTRICTED: This module requires a Veritas Pro subscription.");
//             });
//         }
//     });
// });
// Uncomment the above block to enable Pro feature alerts. but we're offering to buy the subscription in the dashboard itself, so let's keep it open for now.

[navReports, navSettings].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                const upgrade = confirm("ACCESS RESTRICTED: This module requires a Pro subscription. View pricing?");
                if (upgrade) {
                    window.location.href = './pricing.html';
                }
            });
        }
    });
});

