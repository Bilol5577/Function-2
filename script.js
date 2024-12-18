function zakaz() {
    let zakaz = Number(prompt("Qiyqiriq setdan nechta zakaz qilmoqchisiz? (1, 2 yoki 3)"));
    if (isNaN(zakaz) || zakaz < 1 || zakaz > 3) {
        alert("Iltimos, faqat 1, 2 yoki 3ni kiriting!");
        return;
    }

    let narx;
    switch (zakaz) {
        case 1:
            narx = 45000;
            break;
        case 2:
            narx = 90000;
            break;
        case 3:
            narx = 135000;
            break;
        default:
            alert("3 tadan ko'p zakaz qabul qilinmaydi.");
            return;
    }

    let tasdiq = confirm(`${zakaz} ta Qiyqiriq setining jami narxi: ${narx.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`);

    if (tasdiq) {
        alert("Zakazingiz qabul qilindi! Tez orada yetkazib beriladi.");
    } else {
        alert("Zakaz bekor qilindi.");
    }
}

// ================================================================================================================================================================

function zakaz1() {
    let zakaz = Number(prompt("Снек сетdan nechta zakaz qilmoqchisiz? (1, 2 yoki 3)"));
    if (isNaN(zakaz) || zakaz < 1 || zakaz > 3) {
        alert("Iltimos, faqat 1, 2 yoki 3ni kiriting!");
        return;
    }

    let narx;
    switch (zakaz) {
        case 1:
            narx = 79000;
            break;
        case 2:
            narx = 158000;
            break;
        case 3:
            narx = 237000;
            break;
        default:
            alert("3 tadan ko'p zakaz qabul qilinmaydi.");
            return;
    }

    let tasdiq = confirm(`${zakaz} ta Qiyqiriq setining jami narxi: ${narx.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`);

    if (tasdiq) {
        alert("Zakazingiz qabul qilindi! Tez orada yetkazib beriladi.");
    } else {
        alert("Zakaz bekor qilindi.");
    }
}

// ================================================================================================================================================================


function zakaz2() {
    let zakaz = Number(prompt("Классик сетdan nechta zakaz qilmoqchisiz? (1, 2 yoki 3)"));
    if (isNaN(zakaz) || zakaz < 1 || zakaz > 3) {
        alert("Iltimos, faqat 1, 2 yoki 3ni kiriting!");
        return;
    }

    let narx;
    switch (zakaz) {
        case 1:
            narx = 34000;
            break;
        case 2:
            narx = 68000;
            break;
        case 3:
            narx = 102000;
            break;
        default:
            alert("3 tadan ko'p zakaz qabul qilinmaydi.");
            return;
    }

    let tasdiq = confirm(`${zakaz} ta Qiyqiriq setining jami narxi: ${narx.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`);

    if (tasdiq) {
        alert("Zakazingiz qabul qilindi! Tez orada yetkazib beriladi.");
    } else {
        alert("Zakaz bekor qilindi.");
    }
}

// ================================================================================================================================================================

function zakaz3() {
    let zakaz = Number(prompt("Лонгер рингс сетdan nechta zakaz qilmoqchisiz? (1, 2 yoki 3)"));
    if (isNaN(zakaz) || zakaz < 1 || zakaz > 3) {
        alert("Iltimos, faqat 1, 2 yoki 3ni kiriting!");
        return;
    }

    let narx;
    switch (zakaz) {
        case 1:
            narx = 45000;
            break;
        case 2:
            narx = 90000;
            break;
        case 3:
            narx = 135000;
            break;
        default:
            alert("3 tadan ko'p zakaz qabul qilinmaydi.");
            return;
    }

    let tasdiq = confirm(`${zakaz} ta Qiyqiriq setining jami narxi: ${narx.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`);

    if (tasdiq) {
        alert("Zakazingiz qabul qilindi! Tez orada yetkazib beriladi.");
    } else {
        alert("Zakaz bekor qilindi.");
    }
}

// ================================================================================================================================================================

function zakaz4() {
    let zakaz = Number(prompt("Биг сетdan nechta zakaz qilmoqchisiz? (1, 2 yoki 3)"));
    if (isNaN(zakaz) || zakaz < 1 || zakaz > 3) {
        alert("Iltimos, faqat 1, 2 yoki 3ni kiriting!");
        return;
    }

    let narx;
    switch (zakaz) {
        case 1:
            narx = 62000;
            break;
        case 2:
            narx = 124000;
            break;
        case 3:
            narx = 186000;
            break;
        default:
            alert("3 tadan ko'p zakaz qabul qilinmaydi.");
            return;
    }

    let tasdiq = confirm(`${zakaz} ta Qiyqiriq setining jami narxi: ${narx.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`);

    if (tasdiq) {
        alert("Zakazingiz qabul qilindi! Tez orada yetkazib beriladi.");
    } else {
        alert("Zakaz bekor qilindi.");
    }
}

// ================================================================================================================================================================

function zakaz5() {
    let zakaz = Number(prompt("Лестер сетdan nechta zakaz qilmoqchisiz? (1, 2 yoki 3)"));
    if (isNaN(zakaz) || zakaz < 1 || zakaz > 3) {
        alert("Iltimos, faqat 1, 2 yoki 3ni kiriting!");
        return;
    }

    let narx;
    switch (zakaz) {
        case 1:
            narx = 53000;
            break;
        case 2:
            narx = 106000;
            break;
        case 3:
            narx = 159000;
            break;
        default:
            alert("3 tadan ko'p zakaz qabul qilinmaydi.");
            return;
    }

    let tasdiq = confirm(`${zakaz} ta Qiyqiriq setining jami narxi: ${narx.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`);

    if (tasdiq) {
        alert("Zakazingiz qabul qilindi! Tez orada yetkazib beriladi.");
    } else {
        alert("Zakaz bekor qilindi.");
    }
}

// ================================================================================================================================================================

function zakaz6() {
    let zakaz = Number(prompt("Скул сетdan nechta zakaz qilmoqchisiz? (1, 2 yoki 3)"));
    if (isNaN(zakaz) || zakaz < 1 || zakaz > 3) {
        alert("Iltimos, faqat 1, 2 yoki 3ni kiriting!");
        return;
    }

    let narx;
    switch (zakaz) {
        case 1:
            narx = 36000;
            break;
        case 2:
            narx = 72000;
            break;
        case 3:
            narx = 98000;
            break;
        default:
            alert("3 tadan ko'p zakaz qabul qilinmaydi.");
            return;
    }

    let tasdiq = confirm(`${zakaz} ta Qiyqiriq setining jami narxi: ${narx.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`);

    if (tasdiq) {
        alert("Zakazingiz qabul qilindi! Tez orada yetkazib beriladi.");
    } else {
        alert("Zakaz bekor qilindi.");
    }
}

// ================================================================================================================================================================

function zakaz7() {
    let zakaz = Number(prompt("Комбо сет Большойdan nechta zakaz qilmoqchisiz? (1, 2 yoki 3)"));
    if (isNaN(zakaz) || zakaz < 1 || zakaz > 3) {
        alert("Iltimos, faqat 1, 2 yoki 3ni kiriting!");
        return;
    }

    let narx;
    switch (zakaz) {
        case 1:
            narx = 20000;
            break;
        case 2:
            narx = 40000;
            break;
        case 3:
            narx = 60000;
            break;
        default:
            alert("3 tadan ko'p zakaz qabul qilinmaydi.");
            return;
    }

    let tasdiq = confirm(`${zakaz} ta Qiyqiriq setining jami narxi: ${narx.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`);

    if (tasdiq) {
        alert("Zakazingiz qabul qilindi! Tez orada yetkazib beriladi.");
    } else {
        alert("Zakaz bekor qilindi.");
    }
}

// ================================================================================================================================================================

function zakaz8() {
    let zakaz = Number(prompt("Do’stlar 1хdan nechta zakaz qilmoqchisiz? (1, 2 yoki 3)"));
    if (isNaN(zakaz) || zakaz < 1 || zakaz > 3) {
        alert("Iltimos, faqat 1, 2 yoki 3ni kiriting!");
        return;
    }

    let narx;
    switch (zakaz) {
        case 1:
            narx = 43000;
            break;
        case 2:
            narx = 86000;
            break;
        case 3:
            narx = 129000;
            break;
        default:
            alert("3 tadan ko'p zakaz qabul qilinmaydi.");
            return;
    }

    let tasdiq = confirm(`${zakaz} ta Qiyqiriq setining jami narxi: ${narx.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`);

    if (tasdiq) {
        alert("Zakazingiz qabul qilindi! Tez orada yetkazib beriladi.");
    } else {
        alert("Zakaz bekor qilindi.");
    }
}

// ================================================================================================================================================================

function zakaz9() {
    let zakaz = Number(prompt("Do’stlar 2хdan nechta zakaz qilmoqchisiz? (1, 2 yoki 3)"));
    if (isNaN(zakaz) || zakaz < 1 || zakaz > 3) {
        alert("Iltimos, faqat 1, 2 yoki 3ni kiriting!");
        return;
    }

    let narx;
    switch (zakaz) {
        case 1:
            narx = 79000;
            break;
        case 2:
            narx = 158000;
            break;
        case 3:
            narx = 237000;
            break;
        default:
            alert("3 tadan ko'p zakaz qabul qilinmaydi.");
            return;
    }

    let tasdiq = confirm(`${zakaz} ta Qiyqiriq setining jami narxi: ${narx.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`);

    if (tasdiq) {
        alert("Zakazingiz qabul qilindi! Tez orada yetkazib beriladi.");
    } else {
        alert("Zakaz bekor qilindi.");
    }
}

// ================================================================================================================================================================

function zakaz10() {
    let zakaz = Number(prompt("Do’stlar 4хdan nechta zakaz qilmoqchisiz? (1, 2 yoki 3)"));
    if (isNaN(zakaz) || zakaz < 1 || zakaz > 3) {
        alert("Iltimos, faqat 1, 2 yoki 3ni kiriting!");
        return;
    }

    let narx;
    switch (zakaz) {
        case 1:
            narx = 149000;
            break;
        case 2:
            narx = 298000;
            break;
        case 3:
            narx = 347000;
            break;
        default:
            alert("3 tadan ko'p zakaz qabul qilinmaydi.");
            return;
    }

    let tasdiq = confirm(`${zakaz} ta Qiyqiriq setining jami narxi: ${narx.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`);

    if (tasdiq) {
        alert("Zakazingiz qabul qilindi! Tez orada yetkazib beriladi.");
    } else {
        alert("Zakaz bekor qilindi.");
    }
}

// ================================================================================================================================================================

function zakaz11() {
    let zakaz = Number(prompt("Острый Do’stlar 1хdan nechta zakaz qilmoqchisiz? (1, 2 yoki 3)"));
    if (isNaN(zakaz) || zakaz < 1 || zakaz > 3) {
        alert("Iltimos, faqat 1, 2 yoki 3ni kiriting!");
        return;
    }

    let narx;
    switch (zakaz) {
        case 1:
            narx = 43000;
            break;
        case 2:
            narx = 86000;
            break;
        case 3:
            narx = 129000;
            break;
        default:
            alert("3 tadan ko'p zakaz qabul qilinmaydi.");
            return;
    }

    let tasdiq = confirm(`${zakaz} ta Qiyqiriq setining jami narxi: ${narx.toLocaleString()} so'm\nMahsulotni zakaz qilasizmi?`);

    if (tasdiq) {
        alert("Zakazingiz qabul qilindi! Tez orada yetkazib beriladi.");
    } else {
        alert("Zakaz bekor qilindi.");
    }
}

// ================================================================================================================================================================