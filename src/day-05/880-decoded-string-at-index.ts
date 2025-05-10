// Solution 1:
function decodeAtIndex(s: string, k: number): string {
    let encode = "";
    for (let char of s) {
        if (encode.length >= k) {
            break;
        }
        if (!isNaN(Number(char))) {
            encode = encode.repeat(Number(char));
        } else {
            encode += char;
        }
    }

    return encode[k - 1];
};

// Solution 2:
function decodeAtIndex2(s: string, k: number): string {
    let size = 0n; // dùng BigInt
    const kBig = BigInt(k);

    for (let char of s) {
        if (isNaN(Number(char))) {
            size += 1n;
        } else {
            size *= BigInt(char);
        }
    }

    let K = kBig;
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        K %= size;

        if (K === 0n && isNaN(Number(char))) {
            return char;
        }

        if (isNaN(Number(char))) {
            size -= 1n;
        } else {
            size /= BigInt(char);
        }
    }

    return "";
}
