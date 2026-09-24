from django.shortcuts import render


def experiment(request):
    """Aim / Overview of the experiment."""
    return render(request, 'vlab/experiment.html', {'active_page': 'experiment'})


def theory(request):
    """Theoretical background comparing FBVs and CBVs."""
    return render(request, 'vlab/theory.html', {'active_page': 'theory'})


def pretest(request):
    """Pre-experiment assessment questions."""
    return render(request, 'vlab/pretest.html', {'active_page': 'pretest'})


def procedure(request):
    """Step-by-step laboratory procedure."""
    return render(request, 'vlab/procedure.html', {'active_page': 'procedure'})


def simulation(request):
    """Interactive request-response lifecycle simulation."""
    return render(request, 'vlab/simulation.html', {'active_page': 'simulation'})


def posttest(request):
    """Post-experiment evaluation questions."""
    return render(request, 'vlab/posttest.html', {'active_page': 'posttest'})


def references(request):
    """Academic references, official docs, and books."""
    return render(request, 'vlab/references.html', {'active_page': 'references'})


def contributors(request):
    """Contributors and mentors for this experiment."""
    return render(request, 'vlab/contributors.html', {'active_page': 'contributors'})


def feedback(request):
    """Lab feedback and user suggestions."""
    return render(request, 'vlab/feedback.html', {'active_page': 'feedback'})
