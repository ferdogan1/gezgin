// Dünya Gezgini Oyun Mantığı
class WorldExplorerGame {
    constructor() {
        this.currentPlayer = '';
        this.gameQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timeLeft = 20;
        this.timer = null;
        this.gameStartTime = null;
        this.questionStartTime = null;
        
        this.initializeGame();
    }

    initializeGame() {
        this.bindEvents();
        this.loadLeaderboard();
        this.loadWelcomeLeaderboard();
        this.showScreen('welcome-screen');
    }

    bindEvents() {
        // Başlangıç ekranı olayları
        document.getElementById('player-name').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.startGame();
            }
        });

        document.getElementById('start-game').addEventListener('click', () => {
            this.startGame();
        });

        // Cevap seçenekleri
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectAnswer(parseInt(e.target.dataset.option));
            });
        });

        // Sonuç ekranı butonları
        document.getElementById('play-again').addEventListener('click', () => {
            this.resetGame();
            this.loadWelcomeLeaderboard(); // Ana sayfa skorlarını güncelle
        });

        document.getElementById('view-all-scores').addEventListener('click', () => {
            this.showAllScores();
        });

        document.getElementById('reset-scores').addEventListener('click', () => {
            this.resetAllScores();
        });

        document.getElementById('reset-scores-welcome').addEventListener('click', () => {
            this.resetAllScores();
        });

        // İsim girişi kontrolü
        document.getElementById('player-name').addEventListener('input', () => {
            const startBtn = document.getElementById('start-game');
            const name = document.getElementById('player-name').value.trim();
            startBtn.disabled = name.length < 2;
        });
    }

    startGame() {
        const playerName = document.getElementById('player-name').value.trim();
        
        if (playerName.length < 2) {
            alert('Lütfen en az 2 karakter uzunluğunda bir isim girin.');
            return;
        }

        this.currentPlayer = playerName;
        this.gameQuestions = getGameQuestions();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.gameStartTime = Date.now();
        
        this.showScreen('game-screen');
        this.loadQuestion();
        this.startTimer();
    }

    loadQuestion() {
        if (this.currentQuestionIndex >= this.gameQuestions.length) {
            this.endGame();
            return;
        }
        
        // Açıklamayı gizle (yeni soru için)
        this.hideExplanation();

        const question = this.gameQuestions[this.currentQuestionIndex];
        this.questionStartTime = Date.now();
        
        // Soru numarasını güncelle
        document.getElementById('question-counter').textContent = 
            `Soru ${this.currentQuestionIndex + 1}/${this.gameQuestions.length}`;
        
        // İlerleme çubuğunu güncelle
        const progressPercent = ((this.currentQuestionIndex) / this.gameQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = progressPercent + '%';
        
        // Skoru güncelle
        document.getElementById('current-score').textContent = `Puan: ${this.score}`;
        
        // Soruyu yükle
        document.getElementById('question-img').src = question.image;
        document.getElementById('question-text').textContent = question.question;
        
        // Seçenekleri yükle
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach((btn, index) => {
            btn.textContent = question.options[index];
            btn.className = 'option-btn';
            btn.disabled = false;
        });

        // Timer'ı sıfırla
        this.timeLeft = 20;
        this.updateTimer();
    }

    selectAnswer(selectedOption) {
        const question = this.gameQuestions[this.currentQuestionIndex];
        const isCorrect = selectedOption === question.correct;
        const optionButtons = document.querySelectorAll('.option-btn');
        
        // Tüm butonları devre dışı bırak
        optionButtons.forEach(btn => btn.disabled = true);
        
        // Doğru ve yanlış cevapları işaretle
        optionButtons.forEach((btn, index) => {
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === selectedOption && !isCorrect) {
                btn.classList.add('wrong');
            }
        });

        // Puan hesapla (doğru cevap + hız bonusu)
        if (isCorrect) {
            const timeBonus = Math.max(0, Math.floor(this.timeLeft / 10));
            const points = 100 + timeBonus;
            this.score += points;
            this.playSound('correct');
            
            // Skor artışı animasyonu
            const scoreElement = document.getElementById('current-score');
            scoreElement.classList.add('score-increase');
            setTimeout(() => scoreElement.classList.remove('score-increase'), 800);
            
            document.getElementById('current-score').textContent = `Puan: ${this.score}`;
        } else {
            this.playSound('wrong');
        }

        // Timer'ı durdur
        clearInterval(this.timer);
        
        // Açıklamayı göster
        this.showExplanation(question.explanation);
        
        // 4 saniye sonra sonraki soruya geç (açıklama okuma süresi)
        setTimeout(() => {
            this.hideExplanation();
            this.currentQuestionIndex++;
            this.loadQuestion();
            this.startTimer();
        }, 4000);
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimer();
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    updateTimer() {
        const timerElement = document.getElementById('timer');
        timerElement.textContent = this.timeLeft;
        
        // Süre azalırken renk değişimi
        if (this.timeLeft <= 10) {
            timerElement.style.color = '#ff4757';
        } else if (this.timeLeft <= 30) {
            timerElement.style.color = '#ffa502';
        } else {
            timerElement.style.color = '#feca57';
        }
    }

    timeUp() {
        clearInterval(this.timer);
        
        // Doğru cevabı göster
        const question = this.gameQuestions[this.currentQuestionIndex];
        const optionButtons = document.querySelectorAll('.option-btn');
        
        optionButtons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) {
                btn.classList.add('correct');
            }
        });

        // Doğru cevabı göster ve açıklama ekle
        this.showExplanation(question.explanation);
        
        // 4 saniye sonra sonraki soruya geç
        setTimeout(() => {
            this.hideExplanation();
            this.currentQuestionIndex++;
            this.loadQuestion();
            this.startTimer();
        }, 4000);
    }

    endGame() {
        clearInterval(this.timer);
        this.saveScore();
        this.showResults();
        this.showScreen('result-screen');
    }

    saveScore() {
        const gameData = {
            playerName: this.currentPlayer,
            score: this.score,
            timestamp: Date.now(),
            gameTime: Date.now() - this.gameStartTime,
            correctAnswers: this.calculateCorrectAnswers()
        };

        // localStorage'a kaydet
        let leaderboard = JSON.parse(localStorage.getItem('worldExplorerLeaderboard') || '[]');
        leaderboard.push(gameData);
        
        // Skora göre sırala
        leaderboard.sort((a, b) => b.score - a.score);
        
        // Sadece en iyi 50 skoru tut
        leaderboard = leaderboard.slice(0, 50);
        
        localStorage.setItem('worldExplorerLeaderboard', JSON.stringify(leaderboard));
    }

    calculateCorrectAnswers() {
        // Bu basit implementasyonda skor / 100 ile yaklaşık doğru cevap sayısını hesaplıyoruz
        return Math.floor(this.score / 100);
    }

    showResults() {
        document.getElementById('final-player-name').textContent = this.currentPlayer;
        document.getElementById('final-score').textContent = this.score;
        
        // Performans mesajı
        const correctAnswers = this.calculateCorrectAnswers();
        let message = '';
        
        if (correctAnswers >= 18) {
            message = '🌟 Mükemmel! Gerçek bir dünya gezginisin!';
        } else if (correctAnswers >= 15) {
            message = '🎯 Harika! Coğrafya bilgin çok iyi!';
        } else if (correctAnswers >= 12) {
            message = '👍 İyi! Dünya hakkında güzel bilgilerin var!';
        } else if (correctAnswers >= 8) {
            message = '📚 Fena değil! Biraz daha çalışmaya devam!';
        } else {
            message = '🗺️ Başlangıç seviyesi! Keşfe devam et!';
        }
        
        document.getElementById('performance-message').textContent = message;
        
        // Liderlik tablosunu güncelle
        this.updateLeaderboard();
    }

    loadLeaderboard() {
        return JSON.parse(localStorage.getItem('worldExplorerLeaderboard') || '[]');
    }

    updateLeaderboard() {
        const leaderboard = this.loadLeaderboard();
        const leaderboardContainer = document.getElementById('leaderboard');
        
        if (leaderboard.length === 0) {
            leaderboardContainer.innerHTML = '<p style="text-align: center; color: #666;">Henüz kimse oynamadı.</p>';
            return;
        }

        let html = '';
        leaderboard.slice(0, 10).forEach((entry, index) => {
            const isCurrentPlayer = entry.playerName === this.currentPlayer && 
                                   Math.abs(entry.timestamp - Date.now()) < 5000; // Son 5 saniye içinde
            
            html += `
                <div class="leaderboard-item ${isCurrentPlayer ? 'current-player' : ''}">
                    <span class="player-rank">${index + 1}</span>
                    <span class="player-name">${entry.playerName}</span>
                    <span class="player-score">${entry.score}</span>
                </div>
            `;
        });
        
        leaderboardContainer.innerHTML = html;
    }

    showAllScores() {
        const leaderboard = this.loadLeaderboard();
        
        if (leaderboard.length === 0) {
            alert('Henüz hiç skor kaydedilmedi.');
            return;
        }

        let message = '🏆 TÜM SKORLAR 🏆\n\n';
        leaderboard.forEach((entry, index) => {
            const date = new Date(entry.timestamp).toLocaleDateString('tr-TR');
            message += `${index + 1}. ${entry.playerName}: ${entry.score} puan (${date})\n`;
        });
        
        alert(message);
    }

    resetAllScores() {
        // Kullanıcıdan onay al
        const confirmation = confirm(
            '⚠️ DİKKAT! ⚠️\n\n' +
            'Tüm skorları silmek istediğinizden emin misiniz?\n' +
            'Bu işlem geri alınamaz!\n\n' +
            'Silmek için "Tamam"a tıklayın.'
        );
        
        if (confirmation) {
            // localStorage'ı temizle
            localStorage.removeItem('worldExplorerLeaderboard');
            
            // Leaderboard'ları güncelle
            this.updateLeaderboard();
            this.loadWelcomeLeaderboard();
            
            // Başarı mesajı
            alert('✅ Tüm skorlar başarıyla silindi!\n\nYeni oyun için hazırsınız! 🎮');
        }
    }

    resetGame() {
        this.currentPlayer = '';
        this.gameQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timeLeft = 20;
        clearInterval(this.timer);
        
        document.getElementById('player-name').value = '';
        document.getElementById('start-game').disabled = true;
        
        this.showScreen('welcome-screen');
    }

    showScreen(screenId) {
        // Tüm ekranları gizle
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Seçilen ekranı göster
        document.getElementById(screenId).classList.add('active');
    }

    playSound(type) {
        try {
            const audio = document.getElementById(type + '-sound');
            if (audio) {
                audio.currentTime = 0;
                audio.play().catch(e => {
                    // Ses çalamadıysa sessizce geç
                    console.log('Ses çalınamadı:', e);
                });
            }
        } catch (e) {
            // Ses hatası durumunda sessizce geç
            console.log('Ses hatası:', e);
        }
    }

    showExplanation(explanationText) {
        const explanationArea = document.getElementById('explanation-area');
        const explanationTextElement = document.getElementById('explanation-text');
        
        explanationTextElement.textContent = explanationText;
        explanationArea.classList.remove('hidden');
    }

    hideExplanation() {
        const explanationArea = document.getElementById('explanation-area');
        explanationArea.classList.add('hidden');
    }

    loadWelcomeLeaderboard() {
        const leaderboard = this.loadLeaderboard();
        const welcomeLeaderboardContent = document.getElementById('welcome-leaderboard-content');
        const resetButton = document.getElementById('reset-scores-welcome');
        
        if (leaderboard.length === 0) {
            welcomeLeaderboardContent.innerHTML = '<p class="no-scores">Henüz hiç oyun oynanmadı. İlk sen ol!</p>';
            // Skor yoksa butonu gizle
            if (resetButton) {
                resetButton.style.display = 'none';
            }
            return;
        }

        // Skorlar varsa butonu göster
        if (resetButton) {
            resetButton.style.display = 'inline-block';
        }

        let html = '';
        leaderboard.slice(0, 5).forEach((entry, index) => {
            const date = new Date(entry.timestamp).toLocaleDateString('tr-TR', {
                day: '2-digit',
                month: '2-digit'
            });
            
            html += `
                <div class="welcome-leaderboard-item">
                    <span class="welcome-rank">${index + 1}</span>
                    <span class="welcome-player-name">${entry.playerName}</span>
                    <span class="welcome-player-score">${entry.score} <small>(${date})</small></span>
                </div>
            `;
        });
        
        welcomeLeaderboardContent.innerHTML = html;
    }
}

// Sayfa yüklendiğinde oyunu başlat
document.addEventListener('DOMContentLoaded', () => {
    new WorldExplorerGame();
}); 