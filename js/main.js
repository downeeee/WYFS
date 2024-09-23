$(document).ready(function() {
    var $circle = $('#circle');
    var isDragging = false;
    var startAngle = 0;
    var currentAngle = 0;
    var centerX, centerY;
    var rotationSpeed = 0;
    var lastMouseX, lastMouseY;

    function calculateAngle(x, y) {
        return Math.atan2(y - centerY, x - centerX);
    }

    function updateRotation(e) {
        if (isDragging) {
            var angle = calculateAngle(e.pageX, e.pageY);
            var rotateAngle = angle - startAngle;
            currentAngle += rotateAngle;
            rotationSpeed = rotateAngle;
            $circle.css('transform', 'rotate(' + (currentAngle * (180 / Math.PI)) + 'deg)');
            startAngle = angle;
            lastMouseX = e.pageX;
            lastMouseY = e.pageY;
        }
    }

    function applyInertia() {
        if (Math.abs(rotationSpeed) > 0.01) {
            currentAngle += rotationSpeed;
            $circle.css('transform', 'rotate(' + (currentAngle * (180 / Math.PI)) + 'deg)');
            rotationSpeed *= 0.95; // Damping factor to simulate friction
            requestAnimationFrame(applyInertia);
        }
    }

    $circle.on('mousedown', function(e) {
        isDragging = true;
        centerX = $circle.offset().left + $circle.width() / 2;
        centerY = $circle.offset().top + $circle.height() / 2;
        startAngle = calculateAngle(e.pageX, e.pageY);
        currentAngle = parseFloat($circle.css('transform').split('(')[1].split(')')[0]) * (Math.PI / 180) || 0;
        rotationSpeed = 0;
        lastMouseX = e.pageX;
        lastMouseY = e.pageY;
    });

    $(document).on('mousemove', updateRotation);

    $(document).on('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            applyInertia();
        }
    });



    
});



$(document).ready(function() {
    // 음악 순위 데이터
    const musicRanks = [
        { rank: 1, title: "HAPPY", artist: "DAY6" },
        { rank: 2, title: "Supernova", artist: "aespa" },
        { rank: 3, title: "해야", artist: "IVE" },
        { rank: 4, title: "널 제외한 나의 뇌", artist: "DAY6" },
        { rank: 5, title: "Sticky", artist: "KISS OF LIFE" },
        { rank: 6, title: "Armageddon", artist: "aespa" },
        { rank: 7, title: "한 페이지가 될 수 있게", artist: "DAY6" },
        { rank: 8, title: "소나기", artist: "이클립스" },
        { rank: 9, title: "How Sweet", artist: "NewJeans" },
        { rank: 10, title: "ETA", artist: "NewJeans" }
        
    ];

    function renderChart(data) {
        const $chart = $('#chart');
        $chart.empty(); // 기존 내용 삭제

        data.forEach(item => {
            $chart.append(`
                <div class="chart-item">
                    <div class="rank">${item.rank}위</div>
                    <div class="title">${item.title} - ${item.artist}</div>
                </div>
            `);
        });
    }

    // 차트 렌더링
    renderChart(musicRanks);
    // 버튼 클릭 시 차트 업데이트
    $('#updateChart').click(function() {
        // 새로운 데이터 생성 (예시)
        musicRanks = musicRanks.map(item => ({
            ...item,
            title: item.title + ' (업데이트됨)'
        }));

        // 차트 렌더링
        renderChart(musicRanks);
    });

    
});




$(function(){
    

    $(".hamburger").click(function(){
        $("#ham-1").toggleClass("act")
        $(".mm_menu").toggleClass("move")
    })
})//

