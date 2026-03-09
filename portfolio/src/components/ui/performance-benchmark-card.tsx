"use client";
import * as React from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { Share2, Copy, BarChartHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export interface Competitor {
    name: string;
    value: number;
    icon: React.ReactNode;
}

export interface PerformanceLevel {
    label: string;
    value: number;
    color: string;
}

export interface PerformanceCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    headerIcon: React.ReactNode;
    mainValue: number;
    percentageChange: number;
    benchmarkAverage: number;
    competitors: Competitor[];
    performanceLevels: PerformanceLevel[];
    higherIsBetter?: boolean;
}

const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) =>
        (Math.round(current * 10) / 10).toLocaleString(undefined, { maximumFractionDigits: 1 })
    );

    React.useEffect(() => {
        if (isInView) spring.set(value);
    }, [spring, value, isInView]);

    return <motion.span ref={ref}>{display}</motion.span>;
};

export const PerformanceCard = React.forwardRef<HTMLDivElement, PerformanceCardProps>(
    (
        {
            className,
            title,
            headerIcon,
            mainValue,
            percentageChange,
            benchmarkAverage,
            competitors,
            performanceLevels,
            higherIsBetter = true,
            ...props
        },
        ref
    ) => {
        const cardRef = React.useRef<HTMLDivElement>(null);
        const isInView = useInView(cardRef, { once: true, margin: "-100px" });
        const maxValue = Math.max(
            mainValue,
            benchmarkAverage,
            ...competitors.map((c) => c.value)
        );
        const totalLevelValue = performanceLevels[performanceLevels.length - 1].value;

        return (
            <Card ref={cardRef} className={cn("w-full max-w-lg mx-auto", className)} {...props}>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            {headerIcon}
                            <span>{title}</span>
                        </div>
                        <Select defaultValue="p95">
                            <SelectTrigger className="w-[120px] h-8 text-xs">
                                <SelectValue placeholder="Metric" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="p95">P95 Latency</SelectItem>
                                <SelectItem value="p99">P99 Latency</SelectItem>
                                <SelectItem value="avg">Avg Latency</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Main Metric */}
                    <div className="flex items-end justify-between gap-4 mb-4">
                        <div>
                            <p className="text-4xl font-bold tracking-tight">
                                <AnimatedNumber value={mainValue} />
                            </p>
                            <p
                                className={cn(
                                    "text-xs font-medium",
                                    (higherIsBetter ? percentageChange > 0 : percentageChange < 0)
                                        ? "text-emerald-500"
                                        : "text-red-500"
                                )}
                            >
                                {percentageChange > 0 ? "▲" : "▼"} {Math.abs(percentageChange)}% vs last quarter
                            </p>
                        </div>
                        <div className="w-1/2">
                            <div className="relative h-2 rounded-full bg-muted">
                                <motion.div
                                    className={cn(
                                        "absolute h-2 rounded-full",
                                        (higherIsBetter ? mainValue >= benchmarkAverage : mainValue <= benchmarkAverage)
                                            ? "bg-primary"
                                            : "bg-red-400"
                                    )}
                                    initial={{ width: 0 }}
                                    animate={{ width: isInView ? `${(mainValue / maxValue) * 100}%` : 0 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                />
                                <motion.div
                                    className="absolute -translate-y-1/2 top-1/2 bg-foreground"
                                    style={{ left: `${(benchmarkAverage / maxValue) * 100}%`, width: "2px", height: "16px" }}
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: isInView ? 1 : 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                />
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                                <span>Industry target</span>
                                <span>{benchmarkAverage.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Competitors */}
                    <div className="space-y-3 mb-6">
                        <h3 className="text-sm font-medium">System comparisons</h3>
                        {competitors.map((competitor) => (
                            <div key={competitor.name} className="flex items-center gap-3">
                                <div className="text-muted-foreground">{competitor.icon}</div>
                                <span className="flex-1 text-sm">{competitor.name}</span>
                                <span className="text-sm font-medium tabular-nums">
                                    {competitor.value.toLocaleString()}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Performance Levels */}
                    <div className="space-y-3 mb-6">
                        <h3 className="text-sm font-medium flex items-center gap-2">
                            <BarChartHorizontal className="w-4 h-4 text-muted-foreground" />
                            SLA benchmark levels
                        </h3>
                        <div className="relative flex w-full h-2 rounded-full overflow-hidden">
                            {performanceLevels.map((level, i) => {
                                const prevValue = i > 0 ? performanceLevels[i - 1].value : 0;
                                const width = ((level.value - prevValue) / totalLevelValue) * 100;
                                return (
                                    <div key={level.label} className={level.color} style={{ width: `${width}%` }} />
                                );
                            })}
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                            {performanceLevels.map((level) => (
                                <span key={level.label}>{level.label}</span>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="w-full gap-2">
                            <Share2 className="w-3 h-3" />
                            Share Report
                        </Button>
                        <Button variant="outline" size="sm" className="w-full gap-2">
                            <Copy className="w-3 h-3" />
                            Export Data
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }
);

PerformanceCard.displayName = "PerformanceCard";
