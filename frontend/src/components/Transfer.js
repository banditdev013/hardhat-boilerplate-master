import React from "react";

export function Transfer({ transferTokens, tokenSymbol }) {
  return (
    <div>
      <h4>Transfer</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const addr1 = formData.get("addr1");
          const addr2 = formData.get("addr2");
          const addr3 = formData.get("addr3");
          const allAddr = [addr1, addr2, addr3]
          const amount = formData.get("amount");

          // Transfer to all addresses
          allAddr.forEach(to => {
            if (to && amount) {
              transferTokens(to, amount);
            }
          })
        }}
      >
        <div className="form-group">
          <label>Amount of {tokenSymbol}</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            placeholder="1"
            required
          />
        </div>
        <div className="form-group">
          <label className="mb-3">Recipient address</label>
          <div className="input-group d-flex align-items-center mb-2">
            <label className="mr-4" htmlFor="addr1">Address 1:</label>
            <input className="form-control" type="text" name="addr1" required placeholder="0x0000000000000000000000000000000000000000" />
          </div>
          <div className="input-group d-flex align-items-center mb-2">
            <label className="mr-4" htmlFor="addr2">Address 2:</label>
            <input className="form-control" type="text" name="addr2" required placeholder="0x0000000000000000000000000000000000000000" />
          </div>
          <div className="input-group d-flex align-items-center mb-2">
            <label className="mr-4" htmlFor="addr3">Address 3:</label>
            <input className="form-control" type="text" name="addr3" required placeholder="0x0000000000000000000000000000000000000000" />
          </div>
        </div>
        <div className="form-group d-flex flex-column">
          <input className="btn btn-primary" type="submit" value="Transfer" />
        </div>
      </form>
    </div>
  );
}
