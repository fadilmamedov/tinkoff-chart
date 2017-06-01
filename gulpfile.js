const gulp = require("gulp");

gulp.task("examples", () => {
    gulp.src("dist/tinkoff-chart.common.js")
        .pipe(gulp.dest("examples/common/src"));

    gulp.src("dist/tinkoff-chart.umd.js")
        .pipe(gulp.dest("examples/umd"));
});