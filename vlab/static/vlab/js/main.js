/**
 * Django Virtual Lab - Function-Based Views vs Class-Based Views
 * Vanilla JavaScript for interaction, modals, quiz scoring, and simulation.
 */

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initModals();
    initQuizzes();
    initSimulation();
});

/* ==========================================================================
   NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNavigation() {
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");

    if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }
}

/* ==========================================================================
   MODALS (Rate Me & Report Bug)
   ========================================================================== */
function initModals() {
    const rateMeBtn = document.getElementById("rateMeBtn");
    const rateModal = document.getElementById("rateModal");
    const closeRateModal = document.getElementById("closeRateModal");
    const submitRatingBtn = document.getElementById("submitRatingBtn");

    const reportBugBtn = document.getElementById("reportBugBtn");
    const reportModal = document.getElementById("reportModal");
    const closeReportModal = document.getElementById("closeReportModal");
    const submitReportBtn = document.getElementById("submitReportBtn");

    // Open Rate Modal
    if (rateMeBtn && rateModal) {
        rateMeBtn.addEventListener("click", () => {
            rateModal.classList.add("open");
        });
    }

    if (closeRateModal && rateModal) {
        closeRateModal.addEventListener("click", () => {
            rateModal.classList.remove("open");
        });
    }

    if (submitRatingBtn && rateModal) {
        submitRatingBtn.addEventListener("click", () => {
            alert("Thank you for your rating!");
            rateModal.classList.remove("open");
        });
    }

    // Modal Stars
    const modalStars = document.querySelectorAll("#modalStars span");
    modalStars.forEach(star => {
        star.addEventListener("click", () => {
            const rating = parseInt(star.getAttribute("data-star"), 10);
            modalStars.forEach((s, idx) => {
                if (idx < rating) {
                    s.classList.add("selected");
                } else {
                    s.classList.remove("selected");
                }
            });
        });
    });

    // Open Report Modal
    if (reportBugBtn && reportModal) {
        reportBugBtn.addEventListener("click", () => {
            reportModal.classList.add("open");
        });
    }

    if (closeReportModal && reportModal) {
        closeReportModal.addEventListener("click", () => {
            reportModal.classList.remove("open");
        });
    }

    if (submitReportBtn && reportModal) {
        submitReportBtn.addEventListener("click", () => {
            alert("Your bug report has been submitted. Thank you!");
            reportModal.classList.remove("open");
        });
    }

    // Close on backdrop click
    window.addEventListener("click", (e) => {
        if (e.target === rateModal) rateModal.classList.remove("open");
        if (e.target === reportModal) reportModal.classList.remove("open");
    });
}

/* ==========================================================================
   QUIZZES (Pretest & Posttest)
   ========================================================================== */
function initQuizzes() {
    // Pretest
    const submitQuizBtn = document.getElementById("submitQuizBtn");
    const resetQuizBtn = document.getElementById("resetQuizBtn");
    const quizScoreBadge = document.getElementById("quizScoreBadge");

    if (submitQuizBtn) {
        submitQuizBtn.addEventListener("click", () => {
            let score = 0;
            const total = 3;

            for (let i = 1; i <= total; i++) {
                const checked = document.querySelector(`input[name="q${i}"]:checked`);
                const feedbackEl = document.getElementById(`feedback-q${i}`);
                if (!feedbackEl) continue;

                if (!checked) {
                    feedbackEl.className = "quiz-feedback incorrect";
                    feedbackEl.textContent = "Please select an answer.";
                } else if (checked.dataset.correct === "true") {
                    score++;
                    feedbackEl.className = "quiz-feedback correct";
                    feedbackEl.textContent = "Correct! Well done.";
                } else {
                    feedbackEl.className = "quiz-feedback incorrect";
                    feedbackEl.textContent = "Incorrect. Review the question.";
                }
            }

            if (quizScoreBadge) {
                quizScoreBadge.textContent = `Score: ${score} / ${total}`;
            }
        });
    }

    if (resetQuizBtn) {
        resetQuizBtn.addEventListener("click", () => {
            document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
            document.querySelectorAll('.quiz-feedback').forEach(f => {
                f.className = 'quiz-feedback';
                f.textContent = '';
            });
            if (quizScoreBadge) quizScoreBadge.textContent = '';
        });
    }

    // Posttest
    const submitPostQuizBtn = document.getElementById("submitPostQuizBtn");
    const resetPostQuizBtn = document.getElementById("resetPostQuizBtn");
    const postQuizScoreBadge = document.getElementById("postQuizScoreBadge");

    if (submitPostQuizBtn) {
        submitPostQuizBtn.addEventListener("click", () => {
            let score = 0;
            const total = 3;

            for (let i = 1; i <= total; i++) {
                const checked = document.querySelector(`input[name="pq${i}"]:checked`);
                const feedbackEl = document.getElementById(`feedback-pq${i}`);
                if (!feedbackEl) continue;

                if (!checked) {
                    feedbackEl.className = "quiz-feedback incorrect";
                    feedbackEl.textContent = "Please select an answer.";
                } else if (checked.dataset.correct === "true") {
                    score++;
                    feedbackEl.className = "quiz-feedback correct";
                    feedbackEl.textContent = "Correct! Well done.";
                } else {
                    feedbackEl.className = "quiz-feedback incorrect";
                    feedbackEl.textContent = "Incorrect. Review the question.";
                }
            }

            if (postQuizScoreBadge) {
                postQuizScoreBadge.textContent = `Score: ${score} / ${total}`;
            }
        });
    }

    if (resetPostQuizBtn) {
        resetPostQuizBtn.addEventListener("click", () => {
            document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
            document.querySelectorAll('.quiz-feedback').forEach(f => {
                f.className = 'quiz-feedback';
                f.textContent = '';
            });
            if (postQuizScoreBadge) postQuizScoreBadge.textContent = '';
        });
    }
}

/* ==========================================================================
   INTERACTIVE SIMULATION
   ========================================================================== */
function initSimulation() {
    const viewTypeSelect = document.getElementById("viewTypeSelect");
    const httpMethodSelect = document.getElementById("httpMethodSelect");
    const dispatchRequestBtn = document.getElementById("dispatchRequestBtn");
    const resetSimBtn = document.getElementById("resetSimBtn");

    const stepClient = document.getElementById("stepClient");
    const stepUrl = document.getElementById("stepUrl");
    const stepView = document.getElementById("stepView");
    const stepResponse = document.getElementById("stepResponse");

    const clientDesc = document.getElementById("clientDesc");
    const urlDesc = document.getElementById("urlDesc");
    const viewDesc = document.getElementById("viewDesc");
    const responseDesc = document.getElementById("responseDesc");

    const viewCodeDisplay = document.getElementById("viewCodeDisplay");
    const simConsole = document.getElementById("simConsole");
    const explanationText = document.getElementById("explanationText");

    if (!dispatchRequestBtn) return;

    const fbvCodeTemplate = (method) => `# FBV: urls.py -> path('articles/', views.article_view, name='article_view')

def article_view(request):
    # Explicit request method branch
    if request.method == '${method}':
        # Processing incoming ${method} request
        ${method === 'GET' ? 'articles = Article.objects.all()\n        return render(request, "list.html", {"articles": articles})' :
          method === 'POST' ? 'form = ArticleForm(request.POST)\n        if form.is_valid():\n            form.save()\n            return HttpResponse("Article Created", status=201)' :
          method === 'PUT' ? 'return HttpResponse("Article Updated (200 OK)", status=200)' :
          'return HttpResponse("Article Deleted (204 No Content)", status=204)'}
    else:
        # Fallback or Method Not Allowed
        return HttpResponseNotAllowed(['GET', 'POST'])`;

    const cbvCodeTemplate = (method) => `# CBV: urls.py -> path('articles/', ArticleView.as_view(), name='article_view')

class ArticleView(View):
    # Method dispatcher automatically routes ${method} to ${method.toLowerCase()}()
    def ${method.toLowerCase()}(self, request, *args, **kwargs):
        ${method === 'GET' ? 'articles = Article.objects.all()\n        return render(request, "list.html", {"articles": articles})' :
          method === 'POST' ? 'form = ArticleForm(request.POST)\n        if form.is_valid():\n            form.save()\n            return HttpResponse("Article Created", status=201)' :
          method === 'PUT' ? 'return HttpResponse("Article Updated (200 OK)", status=200)' :
          'return HttpResponse("Article Deleted (204 No Content)", status=204)'}

    # Unhandled HTTP methods automatically trigger http_method_not_allowed()`;

    function updateCodePreview() {
        const vType = viewTypeSelect.value;
        const method = httpMethodSelect.value;
        if (vType === "fbv") {
            viewCodeDisplay.textContent = fbvCodeTemplate(method);
        } else {
            viewCodeDisplay.textContent = cbvCodeTemplate(method);
        }
    }

    viewTypeSelect.addEventListener("change", updateCodePreview);
    httpMethodSelect.addEventListener("change", updateCodePreview);
    updateCodePreview();

    function logConsole(msg, type = "normal") {
        const line = document.createElement("div");
        line.className = `console-line ${type}`;
        line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
        simConsole.appendChild(line);
        simConsole.scrollTop = simConsole.scrollHeight;
    }

    dispatchRequestBtn.addEventListener("click", () => {
        const vType = viewTypeSelect.value;
        const method = httpMethodSelect.value;

        // Reset steps
        [stepClient, stepUrl, stepView, stepResponse].forEach(s => {
            s.className = "pipeline-step";
        });

        simConsole.innerHTML = "";
        logConsole(`Starting request dispatch: ${method} /articles/ HTTP/1.1`, "info");

        // Step 1: Client Request
        stepClient.className = "pipeline-step active";
        clientDesc.textContent = `${method} /articles/`;
        logConsole(`Client initialized HttpRequest(method='${method}', path='/articles/')`);

        setTimeout(() => {
            stepClient.className = "pipeline-step completed";
            stepUrl.className = "pipeline-step active";
            urlDesc.textContent = "Matched: path('articles/', ...)";
            logConsole(`URL Resolver: Root URLconf matched pattern '^articles/' -> target: ${vType === 'fbv' ? 'views.article_view' : 'ArticleView.as_view()'}`);
        }, 500);

        setTimeout(() => {
            stepUrl.className = "pipeline-step completed";
            stepView.className = "pipeline-step active";

            if (vType === "fbv") {
                viewDesc.textContent = `FBV: article_view(request)`;
                logConsole(`Executing Function-Based View: article_view(request)`);
                logConsole(`Checking procedural branch: if request.method == '${method}' -> True`, "highlight");
                explanationText.innerHTML = `<strong>Function-Based View Observation:</strong> In the FBV, Django calls <code>article_view(request)</code> directly. The view inspects <code>request.method == '${method}'</code> through manual conditional <code>if/elif</code> statements. All request logic exists in a single procedural scope.`;
            } else {
                viewDesc.textContent = `CBV: dispatch() -> ${method.toLowerCase()}()`;
                logConsole(`Executing Class-Based View: ArticleView.as_view()(request)`);
                logConsole(`View instantiated -> setup() -> dispatch() called`);
                logConsole(`dispatch() inspected request.method: routed to handler method '${method.toLowerCase()}()'`, "highlight");
                explanationText.innerHTML = `<strong>Class-Based View Observation:</strong> In the CBV, <code>as_view()</code> acts as the entry callable. It instantiates <code>ArticleView</code> and invokes <code>dispatch()</code>, which dynamically delegates to <code>def ${method.toLowerCase()}()</code>. This keeps code decoupled and allows mixin reusability.`;
            }
        }, 1100);

        setTimeout(() => {
            stepView.className = "pipeline-step completed";
            stepResponse.className = "pipeline-step active completed";

            const status = method === 'POST' ? '201 Created' : (method === 'DELETE' ? '204 No Content' : '200 OK');
            responseDesc.textContent = `Status: ${status}`;
            logConsole(`HttpResponse returned: Status ${status}`, "success");
            logConsole(`Response pipeline finished successfully.`);
        }, 1800);
    });

    resetSimBtn.addEventListener("click", () => {
        [stepClient, stepUrl, stepView, stepResponse].forEach(s => {
            s.className = "pipeline-step";
        });
        clientDesc.textContent = "GET /articles/ HTTP/1.1";
        urlDesc.textContent = "urls.py match";
        viewDesc.textContent = "View Handler";
        responseDesc.textContent = "Status: 200 OK";
        simConsole.innerHTML = '<div class="console-line">Virtual Lab Ready. Select options above and click [Dispatch Request].</div>';
        explanationText.textContent = "Dispatch a request to observe how Django's execution path differs between Function-Based Views and Class-Based Views.";
        updateCodePreview();
    });
}
