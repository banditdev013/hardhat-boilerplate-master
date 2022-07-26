import React from "react";
import ethGif from '../img/eth_gif.gif'

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="">
                    <img src={ethGif} alt="" />
                </div>
                <div className="col-12 text-center">
                    {/* Metamask network should be set to Localhost:8545. */}
                    {networkError && (
                        <NetworkErrorMessage
                            message={networkError}
                            dismiss={dismiss}
                        />
                    )}
                </div>
                <div className="col-6 p-4 text-center">
                    <p className="alert alert-danger">Please connect to your wallet.</p>
                    <button
                        className="btn btn-warning px-4 py-2"
                        type="button"
                        onClick={connectWallet}
                    >
                        Connect Wallet
                    </button>
                </div>
            </div>
        </div>
    );
}
