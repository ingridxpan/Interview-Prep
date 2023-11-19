document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        "Whether or not you’ve been a manager in the past, how do you strive to “hire and develop the best?”",
        "Tell me about a time when you were at risk of missing a deadline and had to change your strategy to hit that deadline. What did you do? How did you pick up the pace? What did you cut?",
        "Tell me about a time when you were frugal. How did you save on costs? Did you have to make tradeoffs?",
        "Tell me about a time when you stepped up to own an important project that nobody else wanted to do, or that had fallen through the cracks. Why did you think it was important? How did you take ownership of it?",
        "Tell me about a time when you had to use data to support an argument. How did you present that data? What pushback did you get?",
        "What’s been the most effective technique you’ve found to get customer feedback? How do you use this technique at your current job?",
        "Tell me about a time when you solved a complex problem with a simple solution.",
        "Tell me about a time when you had to dig deep into product metrics to come up with an innovative idea. What exact metrics triggered your ideas? What constraints and challenges did you face in developing the idea?",
        "Tell me about a time when a customer asked for something but you decided to build something else.",
        "Tell me about a time when you made an important decision without consulting your manager.",
        "Tell me about a time when you took an ambitious risk and succeeded.",
        "Tell me about a time when you took an ambitious risk and failed.",
        "Tell me about a time when you almost missed a deadline.",
        "Tell me about a time when you had tight timelines and didn't have much time to consider the best plan. How much time did you have? What approach did you take? What did you learn? [Bias for Action]",
        "Tell me about a time when you did something outside of your normal scope of responsibility. Why was it important? What was the outcome? [Ownership]",
        "Tell me about a time when you were working on a product whose scope of opportunity became much bigger than initially envisioned. How did you scale it up? What was the end result of the project? [Innovate]",
        "Tell me about a time when you came up with a novel idea or made a bold decision that had a huge impact on the business.",
        "Think back to one of your past PM experiences. How did you define the product's vision? How did you define the features and build a roadmap for not just the short term but also for 5 years out? How did you strategize and prioritize your roadmap?",
        "Tell me about a time when you met a goal and then exceeded expectations.",
        "Tell me about a time when you drove adoption, vision, or strategies. How were your ideas adopted by others? How did you track the spread of the ideas? Would you do anything different if you were to do it again?",
        "Tell me about a time when you convinced management to undertake a project. What data did you use to do that?",
        "Tell me about a time when you took a risk and it paid off.",
        "Tell me about a time when you used data to convince your leadership team.",
        "Tell me about a time when your team couldn’t meet a deadline. How did you handle it? What did you say to stakeholders? What did you learn for the future?",
        "Tell me about a time when you had to disagree and commit. In other words, a time when your proposal was unsuccessful and you had to commit to someone else’s idea.",
        "Tell me about a time when you strove to disconfirm your beliefs. How did you seek out contrary opinions? What did you learn? How did you update your beliefs accordingly?",
        "Tell me about a time when you strongly disagreed with your manager about the business.",
        "Tell me about a time when you worked with an engineering manager. What challenges did you face? What did you do to overcome these challenges?",
        "Tell me about a time when you, as a manager, initially disagreed with a group's proposal but eventually committed to it. What factors swayed you toward supporting the group's decision? What sort of questions did you ask to lead you to eventually agree with the group? [Disagree and Commit]",
        "Tell me about a time when you let a team member take a risk and learn.",
        "How have you earned the trust of your team and cross-functional stakeholders when there was a radical strategy shift on the team? Use a recent example from your current company. What did you do? What was the outcome?",
        "What’s an important lesson that you think Amazon leadership needs to learn?",
        "If you had to pick just 3 Leadership Principles to teach to new Amazon PMs, which would you pick, and why?",
        "Why do you want to be a PM or PMT? How is this the best way to meet your goals?",
        "Tell me about a time when you applied Amazon’s Leadership Principles to your own daily life.",
        "Tell me about a time when you put the customer first, even at the expense of short-term revenue or other corporate goals.",
        "What makes you “peculiar?”",
        "What are you optimizing for in your career? Why does this make you want to join Amazon?",
        "Tell me about a company that you think is even more customer-centric than Amazon. What do they do better than us?",
        "Which leadership principle do you embody the most? The least?",
        "Tell me about a time when you came up with an innovative solution.",
        "Tell me about a time when you used data to make a decision.",
        "Tell me about a time when you had to make a quick decision without data.",
        "Tell me about a time when you had to deliver a project under a tight timeline. What sacrifices did you have to make? How did it impact the final deliverable? [Deliver Results]",
        "Tell me about a piece of critical or negative feedback you received. What was it? What did you do about it? [Earn Trust]",
        "Tell me about a time when you did an in-depth analysis to understand and solve a problem. How did you know you were focusing on the right factors? What was the outcome? [Dive Deep]",
        "Tell me about a time when you didn't have enough data to make a decision. What did you do?",
        "Tell me about a time when you made something simpler for customers. What prompted you to make the change? What was the outcome?",
        "Tell me about yourself. Why Amazon?",
        "Tell me about a time when you put the customer first.",
        "Tell me about a time when you disagreed but committed.",
        "Tell me about a problem you had to solve that required in-depth thought and analysis.",
        // Add more questions here
    ];
    const questionElement = document.getElementById('question');

    function getRandomQuestion() {
        return questions[Math.floor(Math.random() * questions.length)];
    }

    function changeQuestion() {
        questionElement.classList.add('fade-out');
        setTimeout(() => {
            questionElement.textContent = getRandomQuestion();
            questionElement.classList.remove('fade-out');
            questionElement.classList.add('fade-in');
        }, 150); // Short delay for fade out
    }

    document.getElementById('next-question').addEventListener('click', function() {
        if (!questionElement.classList.contains('fade-out')) {
            changeQuestion();
        }
    });

    // Initialize with a random question
    changeQuestion();
});
