



import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import "./VideoCall.css";

// Carga el script de Jitsi solo una vez, aunque se abran varias llamadas
const loadJitsiScript = () =>
  new Promise((resolve, reject) => {
    if (window.JitsiMeetExternalAPI) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://meet.jit.si/external_api.js";
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

const VideoCall = ({ roomName, displayName, onClose }) => {
  const containerRef = useRef(null);
  const apiRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    loadJitsiScript().then(() => {
      if (cancelled || !containerRef.current) return;

      apiRef.current = new window.JitsiMeetExternalAPI("meet.jit.si", {
        roomName,
        parentNode: containerRef.current,
        width: "100%",
        height: "100%",
        userInfo: { displayName },
        configOverwrite: {
          prejoinPageEnabled: false,
        },
        interfaceConfigOverwrite: {
          MOBILE_APP_PROMO: false,
        },
      });

      // Si la persona cuelga desde los controles de Jitsi, cerramos el modal solo
      apiRef.current.addEventListener("readyToClose", () => {
        onClose();
      });
    });

    return () => {
      cancelled = true;
      if (apiRef.current) {
        apiRef.current.dispose();
        apiRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomName]);

  return (
    <div className="video-call-overlay">
      <div className="video-call-header">
        <span>Videollamada en curso</span>
        <button className="video-call-close" onClick={onClose}>
          <FaTimes /> Cerrar
        </button>
      </div>
      <div className="video-call-container" ref={containerRef} />
    </div>
  );
};

export default VideoCall;