function checkValue(tokenValueId) {
    const check = document.body.contains(document.getElementById(tokenValueId))
    return check;
}

function addFixedToken(parentId, labelHTML, type, fieldNumber, datalistId) {
    let parent = document.getElementById(parentId);
    let divi = document.createElement("div");
    let cb = document.createElement("input");
    let label = document.createElement("label");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("class", "cb");
    label.innerHTML = labelHTML;
    divi.appendChild(cb);
    divi.appendChild(label);
    if (type == "list") {
        while (fieldNumber--) {
            let field = document.createElement("input");
            field.setAttribute("list", datalistId);
            divi.appendChild(field);
        }
    }
    if (type == "text") {
        while (fieldNumber--) {
            let field = document.createElement("input");
            field.setAttribute("type", "text");
            divi.appendChild(field);
        }
    }
    parent.appendChild(divi);
}

function addFlexibleToken(parentId, labelHTML, type, fieldNumberId, defaultFieldNumber, datalistId) {
    let parent = document.getElementById(parentId);
    let divi = document.createElement("div");
    let cb = document.createElement("input");
    let label = document.createElement("label");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("class", "cb");
    label.innerHTML = labelHTML;
    divi.appendChild(cb);
    divi.appendChild(label);
    let fieldNumber = document.getElementById(fieldNumberId).value
    fieldNumber = fieldNumber > 0 ? fieldNumber : defaultFieldNumber;
    if (type == "list") {
        while (fieldNumber--) {
            let field = document.createElement("input");
            field.setAttribute("list", datalistId);
            divi.appendChild(field);
        }
    }
    if (type == "text") {
        while (fieldNumber--) {
            let field = document.createElement("input");
            field.setAttribute("type", "text");
            divi.appendChild(field);
        }
    }
    parent.appendChild(divi);
}

function removeTokenFromGroup(parentId, labelHTML) {
    let parent = document.getElementById(parentId);
    let children = parent.children;
    for (let i = children.length - 1; i > 0; i--) {
        if (removeElement) {
            break;
        }
        if (children[i].tagName == "DIV") {
            let subChildren = children[i].children;
            var subChild;
            for (subChild of subChildren) {
                if (subChild.innerHTML == labelHTML) {
                    var removeElement = children[i];
                    break;
                }
            }
        }
    }
    removeElement.parentNode.removeChild(removeElement);
}

function toggleElementGroup(elementGroupId) {
    let elementGroup = document.getElementById(elementGroupId);
    if (elementGroup.style.display === 'none') {
        elementGroup.style.display = 'block';
    }
    else {
        elementGroup.style.display = 'none';
    }
}

function checkVisibleCheckboxes() {
    let checkboxes = document.getElementsByClassName("cb");
    for (checkbox of checkboxes) {
        if (checkbox.parentNode.parentNode.parentNode.style.display != 'none') {
            checkbox.checked = true;
        }
    }
}

function uncheckVisibleCheckboxes() {
    let checkboxes = document.getElementsByClassName("cb");
    for (checkbox of checkboxes) {
        if (checkbox.parentNode.parentNode.parentNode.style.display != 'none') {
            checkbox.checked = false;
        }
    }
}

function addFlexibleButtonsToken(parentId, labelHTML, defaultListNumber, defaultTextNumber, listFirst, datalistId) {
    let parent = document.getElementById(parentId);
    let divi = document.createElement("div");
    let cb = document.createElement("input");
    let addButton = document.createElement("button");
    let removeButton = document.createElement("button");
    let label = document.createElement("label");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("class", "cb");
    addButton.innerHTML = "+";
    removeButton.innerHTML = "-";
    label.innerHTML = labelHTML;
    addButton.addEventListener("click", function () { addListTest(this.parentElement, datalistId) })
    removeButton.addEventListener("click", function () { removeFieldTest(this.parentElement, 1) })
    divi.appendChild(cb);
    divi.appendChild(addButton);
    divi.appendChild(removeButton);
    divi.appendChild(label);
    let listNumber = defaultListNumber;
    let textNumber = defaultTextNumber;
    const tokens = parent.children;
    for (token of tokens) {
        let tokenChildren = token.children;
        for (tokenChild of tokenChildren) {
            if (tokenChild.tagName === "LABEL" && tokenChild.innerHTML === labelHTML) {
                listNumber = tokenChildren.length - 4;
                break;
            }
        }
    }
    if (listFirst) {
        while (listNumber--) {
            let field = document.createElement("input");
            field.setAttribute("list", datalistId);
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
        while (textNumber--) {
            let field = document.createElement("input");
            field.setAttribute("type", "text");
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
    } else {
        while (textNumber--) {
            let field = document.createElement("input");
            field.setAttribute("type", "text");
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
        while (listNumber--) {
            let field = document.createElement("input");
            field.setAttribute("list", datalistId);
            field.addEventListener("change", function () { flexibleAutoChecker(this) })
            divi.appendChild(field);
        }
    }
    parent.appendChild(divi);
}

function addListTest(parent, datalistId) {
    let list = document.createElement("input");
    list.setAttribute("list", datalistId);
    list.addEventListener("change", function () { flexibleAutoChecker(this) });
    parent.appendChild(list);
}

function removeFieldTest(parent, minFieldNumber) {
    let children = parent.children;
    if (children.length > minFieldNumber + 4) {
        let removeValue = children[children.length - 1]
        removeValue.parentNode.removeChild(removeValue);
    };
}