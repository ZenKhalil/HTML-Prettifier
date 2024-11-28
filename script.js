const VOID_ELEMENTS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);
const INLINE_ELEMENTS = new Set([
  "a",
  "abbr",
  "b",
  "br",
  "button",
  "cite",
  "code",
  "em",
  "i",
  "img",
  "input",
  "label",
  "q",
  "script",
  "span",
  "strong",
  "sub",
  "sup",
  "textarea",
  "time",
]);

function formatNode(node, depth = 0, isInlineContext = false) {
  if (!node) return "";
  const tagName = node.tagName?.toLowerCase();
  const isVoidElement = VOID_ELEMENTS.has(tagName);
  const isInline = INLINE_ELEMENTS.has(tagName);
  const needsIndentation = !isInlineContext && !isInline;

  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
      return `${
        needsIndentation ? "  ".repeat(depth) : ""
      }<${tagName}${formatAttributes(node)}>${
        node.hasChildNodes()
          ? Array.from(node.childNodes)
              .map((child) =>
                formatNode(
                  child,
                  depth + (isInline || isInlineContext ? 0 : 1),
                  isInline || isInlineContext
                )
              )
              .join("") +
            (isVoidElement
              ? ""
              : `${!isInline ? "\n" + "  ".repeat(depth) : ""}</${tagName}>`)
          : isVoidElement
          ? ""
          : `</${tagName}>`
      }${needsIndentation ? "\n" : ""}`;

    case Node.TEXT_NODE:
      return node.textContent.trim().replace(/\s+/g, " ") || "";

    default:
      return "";
  }
}

function formatAttributes(element) {
  return Array.from(element.attributes || [])
    .map((attr) => ` ${attr.name}="${attr.value}"`)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("=== Formatted DOM Structure ===");
  console.log("<!DOCTYPE html>");
  console.log(formatNode(document.documentElement));
  console.log("========== End ==========");
});
